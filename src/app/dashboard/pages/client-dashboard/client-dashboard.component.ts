import { Component } from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";
import {MatCard, MatCardContent} from "@angular/material/card";
import {UpcomingAppointmentsComponent} from "../../components/upcoming-appointments/upcoming-appointments.component";
import {StaffListComponent} from "../../components/staff-list/staff-list.component";
import {ReviewListComponent} from "../../components/review-list/review-list.component";

@Component({
  selector: 'app-client-dashboard',
  imports: [
    TranslatePipe,
    MatCard,
    MatCardContent,
    UpcomingAppointmentsComponent,
  ],
  templateUrl: './client-dashboard.component.html',
  styleUrl: './client-dashboard.component.css'
})
export class ClientDashboardComponent {

}
