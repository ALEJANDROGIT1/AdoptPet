import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Registrar } from '../interfaces/registrar';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class ObtenerDatosService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  obtenerProductos() {
    return this.http.get(`${this.apiUrl}/login`); // Ruta a tu endpoint en la API Node.js
  }

  registrarUsuario(datos: Registrar): Observable<any> {
    console.log(JSON.stringify(datos))
    return this.http.post(`${this.apiUrl}/register`, JSON.stringify(datos), httpOptions);
  }

  login(username: string, password: string, rol: string) {
    // Realiza una solicitud HTTP POST al servidor para autenticar al usuario
    return this.http.post(`${this.apiUrl}/login`, { username, password, rol });
  }
}
