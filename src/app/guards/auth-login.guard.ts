import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthLoginService } from './../service/auth-login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthLoginGuard implements CanActivate {

  constructor(private authService: AuthLoginService, private router: Router) {}
  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']); // Redirige a la página de inicio de sesión si no está autenticado
      return false;
    }
  }
}

