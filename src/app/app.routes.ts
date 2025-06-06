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
import {ClientDashboardComponent} from './dashboard/pages/client-dashboard/client-dashboard.component';
import {SalonComponent} from './dashboard/pages/salon/salon.component';
import {ReviewsTabComponent} from './reviews/pages/reviews-tab/reviews-tab.component';
import {ServicesTabComponent} from './services/pages/services-tab/services-tab.component';
import {SettingsPageComponent} from './providerSettings/pages/settings-page/settings-page.component';
import {SubscriptionTabComponent} from './subscription/pages/subscription-tab/subscription-tab.component';
import {AppointmentMakerComponent} from './appointments/pages/appointment-maker/appointment-maker.component';

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

  {
    path: 'provider',
    component: ProviderLayoutComponent, // un layout que contiene su sidebar, toolbar, etc.
    children: [
      { path: '', redirectTo: 'homeProvider', pathMatch: 'full' },
      { path: 'homeProvider', component: ProfessionalDashboardComponent },
      { path: 'profile', component: ProfilePageComponent },
      { path: 'schedule', component: SchedulePageComponent },
      { path: 'reviews', component: ReviewsTabComponent },
      { path: 'services', component: ServicesTabComponent },
      { path: 'subscription', component: SubscriptionTabComponent},
      { path: 'settings', component: SettingsPageComponent}
    ]
  },
  {
    path: 'client',
    component: ClientLayoutComponent, // un layout que contiene su sidebar, toolbar, etc.
    children: [
      { path: '', redirectTo: 'homeClient', pathMatch: 'full' },
      { path: 'homeClient', component: ClientDashboardComponent },
      { path: 'appointment', component: ClientAppointmentPagesComponent },
      { path: 'appointment-maker', component: AppointmentMakerComponent},
      { path: 'favorites', component: ClientFavoriteComponent },
      { path: 'profile', component: ClientProfileComponent },
    ]
  },
  {
    path: 'client/homeClient',
    component: ClientLayoutComponent,
    children: [
      { path: '', redirectTo: 'homeClient', pathMatch: 'full' },
      { path: 'salon', component: SalonComponent}
    ]
  },

  // Ruta no encontrada (opcional)
  { path: '**', redirectTo: 'iam/login' }

];
