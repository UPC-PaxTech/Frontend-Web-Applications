import { Component } from '@angular/core';
import {ProfileComponent} from '../../components/profile/profile.component';
import {SidebarClientComponent} from '../../../public/components/sidebar-client/sidebar-client.component';
import {
  UpcomingAppointmentsComponent
} from '../../../dashboard/components/upcoming-appointments/upcoming-appointments.component';
import {SalonGridComponent} from '../../../favorites/components/salon-grid/salon-grid.component';

@Component({
  selector: 'app-client-profile',
  imports: [
    ProfileComponent,
    SidebarClientComponent,
    UpcomingAppointmentsComponent,
    SalonGridComponent
  ],
  templateUrl: './client-profile.component.html',
  styleUrl: './client-profile.component.css'
})
export class ClientProfileComponent {

}
