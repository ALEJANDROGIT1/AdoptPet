import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { TechnicalSupportComponent } from './components/technical-support/technical-support.component';
import { AuthLoginGuard } from './guards/auth-login.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
 /* { path: 'dashboard', component: DashboardComponent }, */
 /* { path: 'support', component: TechnicalSupportComponent },  */
  {
    path: 'dashboard',
     component: DashboardComponent,
     canActivate: [AuthLoginGuard],
    // data: { expectedRoles: ['VETERINARIO'] },
  },
  {
    path: 'support',
    component: TechnicalSupportComponent,
    canActivate: [AuthLoginGuard],
    data: { expectedRoles: ['USUARIO'] },
  },
  { path: '**', redirectTo: '/dashboard' }

];
=======

const routes: Routes = [];
>>>>>>> fc0bce00b17db08b93b40e4ffc559dbec9301f16

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
