import { Component } from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";
import {MatCard, MatCardContent} from "@angular/material/card";
import {UpcomingAppointmentsComponent} from "../../components/upcoming-appointments/upcoming-appointments.component";
import {StaffListComponent} from "../../components/staff-list/staff-list.component";
import {ReviewListComponent} from "../../components/review-list/review-list.component";
import {SidebarComponent} from '../../../public/components/sidebar/sidebar.component';
import {SidebarClientComponent} from "../../../public/components/sidebar-client/sidebar-client.component";
import {SalonListComponent} from '../../components/salon-list/salon-list.component';

@Component({
  selector: 'app-client-dashboard',
  imports: [
    TranslatePipe,
    MatCard,
    MatCardContent,
    UpcomingAppointmentsComponent,
    StaffListComponent,
    ReviewListComponent,
    TranslatePipe,
    SidebarComponent,
    SidebarClientComponent,
    SalonListComponent
  ],
  templateUrl: './client-dashboard.component.html',
  styleUrl: './client-dashboard.component.css'
})
export class ClientDashboardComponent {

}
