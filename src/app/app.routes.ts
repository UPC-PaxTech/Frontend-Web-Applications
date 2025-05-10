import { Routes } from '@angular/router';
import { ProfessionalDashboardComponent } from './dashboard/pages/professional-dashboard/professional-dashboard.component';
import {ProfilePageComponent } from './profile/pages/profile-page/profile-page.component';
import { SchedulePageComponent } from './schedule/pages/schedule-page/schedule-page.component';
import { LoginPageComponent } from './iam/pages/login-page/login-page.component'
import { RegisterPageComponent } from './iam/pages/register-page/register-page.component'
import { ProviderLayoutComponent} from './public/components/provider-layout/provider-layout.component';
import {ClientLayoutComponent} from './public/components/client-layout/client-layout.component';
import {
  ClientAppointmentPagesComponent
} from './appointments/pages/client-appointment-pages/client-appointment-pages.component';
import {ClientFavoriteComponent} from './favorites/pages/client-favorite/client-favorite.component';
import {ClientProfileComponent} from './profileclient/pages/client-profile/client-profile.component';

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
    component: ProviderLayoutComponent, // un layout que contiene su sidebar, toolbar, etc.
    children: [
      { path: '', redirectTo: 'homeProvider', pathMatch: 'full' },
      { path: 'homeProvider', component: ProfessionalDashboardComponent },
      { path: 'profile', component: ProfilePageComponent },
      { path: 'schedule', component: SchedulePageComponent },
    ]
  },
  {
    path: 'client',
    component: ClientLayoutComponent, // un layout que contiene su sidebar, toolbar, etc.
    children: [
      { path: '', redirectTo: 'appointment', pathMatch: 'full' },
      { path: 'appointment', component: ClientAppointmentPagesComponent },
      { path: 'favorites', component: ClientFavoriteComponent },
      { path: 'profile', component: ClientProfileComponent },
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
