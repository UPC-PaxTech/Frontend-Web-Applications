import { Routes } from '@angular/router';
import {
  ProfessionalDashboardComponent
} from './dashboard/pages/professional-dashboard/professional-dashboard.component';
import {ProfilePageComponent} from './profile/pages/profile-page/profile-page.component';
import {SchedulePageComponent} from './schedule/pages/schedule-page/schedule-page.component';
import {ClientAppointmentPagesComponent} from './appointments/pages/client-appointment-pages/client-appointment-pages.component';

//import {HomeProviderComponent} from './public/pages/home/home.component'; // HomeProvides (Dashboard)
//const ProfileProviderComponent = () => import('./public/pages/about/about.component').then(m => m.AboutComponent); // Logout
//const LogoutComponent = () => import('./public/pages/about/about.component').then(m => m.AboutComponent); // Profile Provider


export const routes: Routes = [
  // { path: 'profile-provider',  component:      ProfileProviderComponent },
  // { path: 'logout',            loadComponent:  LogoutComponent },
  { path: '', redirectTo: 'homeProvider', pathMatch: 'full' },
  { path: 'homeProvider', component: ProfessionalDashboardComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'schedule', component: SchedulePageComponent },
  {path : 'Appointment', component: ClientAppointmentPagesComponent}
];
