import { Component, OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import {
  UpcomingAppointmentsComponent
} from './dashboard/components/upcoming-appointments/upcoming-appointments.component';
import {
  ProfessionalDashboardComponent
} from './dashboard/pages/professional-dashboard/professional-dashboard.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UpcomingAppointmentsComponent, ProfessionalDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend-Web-Applications';

  constructor() {}


}
