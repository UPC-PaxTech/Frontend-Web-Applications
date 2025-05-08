import { Component, OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import {
  UpcomingAppointmentsComponent
} from './dashboard/components/upcoming-appointments/upcoming-appointments.component';

import {SalonListComponent} from './dashboard/components/salon-list/salon-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UpcomingAppointmentsComponent, SalonListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend-Web-Applications';

  constructor() {}
}
