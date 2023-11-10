import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthLoginService } from 'src/app/service/auth-login.service';
import { Registrar } from './../../interfaces/registrar';
import { ObtenerDatosService } from './../../service/obtener-datos.service';



declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarioLogin = {
    username: '',
    password: '',
    rolLogin: 'veterinario'
  };


  usuario = {
    nombre: '',
    apellido: '',
    usuario: '',
    email: '',
    contrasena: '',
    repetirContrasena: '',
    rol: 'veterinario'
  };
  // formulario: FormGroup;
  constructor(private form:FormBuilder, private obtenerDatosService: ObtenerDatosService, private authService: AuthLoginService) {
    // this.formulario = this.form.group({
    //   nombre:['', Validators.required],
    //   apellido:['', Validators.required],
    //   usuario:['', Validators.required],
    //   email:['', Validators.required],
    //   contrasena:['', Validators.required],
    //   repetirContrasena:['', Validators.required],
    //   rol:['veterinario', Validators.required]
    // });

  }

  ngOnInit(): void {

    $(".contenedor-formularios").find("input, textarea").on("keyup blur focus", (e: any) => {
      var $this = $(e.target),
        label = $this.prev("label");

      if (e.type === "keyup") {
        if ($this.val() === "") {
          label.removeClass("active highlight");
        } else {
          label.addClass("active highlight");
        }
      } else if (e.type === "blur") {
        if ($this.val() === "") {
          label.removeClass("active highlight");
        } else {
          label.removeClass("highlight");
        }
      } else if (e.type === "focus") {
        if ($this.val() === "") {
          label.removeClass("highlight");
        }
        else if ($this.val() !== "") {
          label.addClass("highlight");
        }
      }
    });

    $(".tab a").on("click", (e: any) => {
      e.preventDefault();

      $(e.target).parent().addClass("active");
      $(e.target).parent().siblings().removeClass("active");

      const target = $(e.target).attr("href");

      $(".contenido-tab > div").not(target).hide();

      $(target).fadeIn(600);
    });

    // this.obtenerDatosService.registrarUsuario({

    //   nombre: this.formulario.get("nombre")?.value,
    //   apellido: this.formulario.get("apellido")?.value,
    //   usuario: this.formulario.get("usuario")?.value,
    //   email: this.formulario.get("email")?.value,
    //   contrasena: this.formulario.get("contrasena")?.value,
    //   rol: this.formulario.get("rol")?.value,
    // }).subscribe(datos=>{
    //   console.log(datos);
    // });
    console.log('Datos del formulario:', this.usuario);

  }
  // registrarUsuario(): void {
  //   // Verifica la coincidencia de contraseñas
  //   console.log('Datos del formulario:');
  //   console.log('Datos del formulario:', this.formulario.value);
  //   if (this.formulario.get('contrasena')?.value !== this.formulario.get('repetirContrasena')?.value) {
  //     console.error('Las contraseñas no coinciden');
  //     return;
  //   }

  //   // Crea un objeto JSON a partir de los datos del formulario
  //   const datosUsuario = {
  //     nombre: this.formulario.get('nombre')?.value,
  //     apellido: this.formulario.get('apellido')?.value,
  //     usuario: this.formulario.get('usuario')?.value,
  //     email: this.formulario.get('email')?.value,
  //     contrasena: this.formulario.get('contrasena')?.value,
  //     rol: this.formulario.get('rol')?.value,
  //   };

  //   // Envía los datos al servidor como JSON
  //   this.obtenerDatosService.registrarUsuario(datosUsuario).subscribe(
  //     (response) => {
  //       console.log('Usuario registrado exitosamente:', response);
  //       // Puedes agregar más acciones aquí si es necesario
  //     },
  //     (error) => {
  //       console.error('Error al registrar el usuario:', error);
  //     }
  //   );
  // }

  iniciarSesion() {
    this.authService.login(this.usuarioLogin.username, this.usuarioLogin.password, this.usuarioLogin.rolLogin)
      .subscribe(
        (response) => {
          console.log('Autenticación exitosa:', response);
          // Realizar redirección a la página de contenido protegido aquí
        },
        (error) => {
          console.error('Error al iniciar sesión:', error);
          // Manejar error de autenticación
        }
      );
  }



     registrarUsuario(form: NgForm): void {
    // console.log('Datos del formulario:', form.value);
    if (this.verificarCoincidenciaContrasena()) {
      // Crear un objeto JSON a partir de los datos del formulario
      const datosUsuario = {
        nombre: this.usuario.nombre,
        apellido: this.usuario.apellido,
        usuario: this.usuario.usuario,
        email: this.usuario.email,
        contrasena: this.usuario.contrasena,
        rol: this.usuario.rol
      };
      console.log('Datos del formulario:', form.value);

      // Enviar los datos al servidor como JSON
      this.obtenerDatosService.registrarUsuario(datosUsuario).subscribe(
        (response) => {
          console.log('Usuario registrado exitosamente:', response);
          // Puedes agregar más acciones aquí si es necesario
        },
        (error) => {
          console.error('Error al registrar el usuario:', error);
        }
      );
    }
}



  verificarCoincidenciaContrasena(): boolean {
        return this.usuario.contrasena === this.usuario.repetirContrasena;
      }



}



