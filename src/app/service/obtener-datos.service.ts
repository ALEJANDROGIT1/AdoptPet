import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ObtenerDatosService {

  constructor(private http: HttpClient) {}

  obtenerProductos() {
    return this.http.get('http://localhost:3000/api/login'); // Ruta a tu endpoint en la API Node.js
  }
}
