import { Component, OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';

<<<<<<< HEAD
/**
import {ProfessionalDashboardComponent} from './dashboard/pages/professional-dashboard/professional-dashboard.component';
import {CalendarComponent} from './schedule/components/calendar/calendar.component'
  */
=======
>>>>>>> af088205ef3b2f5ea06d31a1b009a0254cb555b2
import {AppointmentsListComponent} from './appointments/components/appointments-list/appointments-list.component';


@Component({
  selector: 'app-root',
<<<<<<< HEAD

  imports: [RouterOutlet, AppointmentsListComponent

  ],

=======
  imports: [RouterOutlet, AppointmentsListComponent],
>>>>>>> af088205ef3b2f5ea06d31a1b009a0254cb555b2
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend-Web-Applications';

  constructor() {}


}
