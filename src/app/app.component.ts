import { Component, OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { UpcomingAppointmentsComponent } from './dashboard/components/upcoming-appointments/upcoming-appointments.component';
import { ProfessionalDashboardComponent } from './dashboard/pages/professional-dashboard/professional-dashboard.component';

import {CalendarComponent} from './schedule/components/calendar/calendar.component'
import { ToolbarProviderComponent } from './public/components/toolbar-provider/toolbar-provider.component'


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfessionalDashboardComponent, CalendarComponent, ToolbarProviderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend-Web-Applications';

  constructor() {}


}
