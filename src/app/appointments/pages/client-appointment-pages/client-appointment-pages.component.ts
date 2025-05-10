import { Component } from '@angular/core';
import {AppointmentsListComponent} from '../../components/appointments-list/appointments-list.component';

@Component({
  selector: 'app-client-appointment-pages',
  imports: [
    AppointmentsListComponent
  ],
  templateUrl: './client-appointment-pages.component.html',
  styleUrl: './client-appointment-pages.component.css'
})
export class ClientAppointmentPagesComponent {

}
