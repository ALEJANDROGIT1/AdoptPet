// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthLoginService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // login(username: string, password: string, rol: string): Observable<any> {
  //   const data = { username, password, rol };
  //   return this.http.post(`${this.apiUrl}/login`, data);
  // }

  login(username: string, password: string, rol: string) {
    return this.http.post(`${this.apiUrl}/login`, { username, password, rol });
  }

  getProtectedContent(): Observable<any> {
    return this.http.get(`${this.apiUrl}/contenido-protegido`);
  }


  // private isAuthenticated: boolean = false;
  // private userRoles: string[] = []; // 'veterinario', 'usuario', etc.

  // login() {
  //   // Lógica de autenticación
  //   this.isAuthenticated = true;
  //   this.userRoles = ['veterinario']; // o ['usuario'], dependiendo de la autenticación real
  // }

  // logout() {
  //   // Lógica de cierre de sesión
  //   this.isAuthenticated = false;
  //   this.userRoles = [];
  // }

  // isAuthenticatedUser(): boolean {
  //   return this.isAuthenticated;
  // }

  // getUserRole(): string[] {
  //   return this.userRoles;
  // }

  // hasAnyRole(expectedRoles: string[]): boolean {
  //   return this.isAuthenticated && this.userRoles.some(role => expectedRoles.includes(role));
  // }
}


