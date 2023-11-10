import { Component } from '@angular/core';
import { ObtenerDatosService } from './../../service/obtener-datos.service';
import { AuthLoginService } from './../../service/auth-login.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  // template: `
  //   <ul>
  //     <li *ngFor="let dato of datos">{{ dato.Nombre }}</li>
  //   </ul>
  // `
})
export class DashboardComponent {
  datos: any[] = [];

  constructor(private obtenerDatosService: ObtenerDatosService, private authService: AuthLoginService) {}

  ngOnInit() {
    this.obtenerDatosService.obtenerProductos().subscribe((data: any) => {
      this.datos = data;
    });
  }

  // Ejemplo de cómo usar el servicio para mostrar/ocultar partes de la interfaz
//  shouldShowVeterinarianSection(): boolean {
//   return this.authService.isAuthenticatedUser() && this.authService.getUserRole().includes('veterinario');
// }

// shouldShowUserSection(): boolean {
//   return this.authService.isAuthenticatedUser() && this.authService.getUserRole().includes('usuario');
// }

}

