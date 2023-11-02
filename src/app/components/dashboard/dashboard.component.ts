import { Component } from '@angular/core';
import { ObtenerDatosService } from './../../service/obtener-datos.service';

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

  constructor(private obtenerDatosService: ObtenerDatosService) {}

  ngOnInit() {
    this.obtenerDatosService.obtenerProductos().subscribe((data: any) => {
      this.datos = data;
    });
  }
}
