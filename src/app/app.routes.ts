import { Routes } from '@angular/router';
import { ProfessionalDashboardComponent } from './dashboard/pages/professional-dashboard/professional-dashboard.component';
import {ProfilePageComponent } from './profile/pages/profile-page/profile-page.component';
import { SchedulePageComponent } from './schedule/pages/schedule-page/schedule-page.component';
import { LoginPageComponent } from './iam/pages/login-page/login-page.component'
import { RegisterPageComponent } from './iam/pages/register-page/register-page.component'


export const routes: Routes = [

  // Redirección por defecto al login
  { path: '', redirectTo: 'iam/login', pathMatch: 'full' },

  // Rutas del módulo de autenticación (IAM)
  {
    path: 'iam',
    children: [
      { path: 'login', component: LoginPageComponent },
      { path: 'register', component: RegisterPageComponent },
    ]
  },

  // Dashboard del cliente (puedes tener más rutas hijas si lo deseas)
  /*
  {
    path: 'client',
    component: ClientDashboardComponent,
  },*/

  // Rutas para el proveedor con layout compartido (sidebar, toolbar, etc.)
  {
    path: 'provider',
    children: [
      { path: '', redirectTo: 'homeProvider', pathMatch: 'full' },
      { path: 'homeProvider', component: ProfessionalDashboardComponent },
      { path: 'profile', component: ProfilePageComponent },
      { path: 'schedule', component: SchedulePageComponent },
    ]
  },

  // Ruta no encontrada (opcional)
  { path: '**', redirectTo: 'iam/login' }


  /*
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'homeProvider', component: ProfessionalDashboardComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'schedule', component: SchedulePageComponent },
  {
    path: 'iam',
    children: [
      { path: 'login', component: LoginPageComponent },
      { path: 'register', component: RegisterPageComponent },
    ]
  }*/
];
