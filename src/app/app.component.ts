import { Component, OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';

/**
import {ProfessionalDashboardComponent} from './dashboard/pages/professional-dashboard/professional-dashboard.component';
import {CalendarComponent} from './schedule/components/calendar/calendar.component'
  */
import {AppointmentsListComponent} from './appointments/components/appointments-list/appointments-list.component';


@Component({
  selector: 'app-root',

  imports: [RouterOutlet, AppointmentsListComponent

  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend-Web-Applications';

  constructor() {}


}
