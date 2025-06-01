import { Component } from '@angular/core';
import {ProfileClientComponent} from '../../components/profile/profile-client.component';
import {SidebarClientComponent} from '../../../public/components/sidebar-client/sidebar-client.component';
import {
  UpcomingAppointmentsComponent
} from '../../../dashboard/components/upcoming-appointments/upcoming-appointments.component';
import {SalonGridComponent} from '../../../dashboard/components/salon-grid/salon-grid.component';

@Component({
  selector: 'app-client-profile',
  imports: [
    ProfileClientComponent,
    SidebarClientComponent,
    UpcomingAppointmentsComponent,
    SalonGridComponent
  ],
  templateUrl: './client-profile.component.html',
  styleUrl: './client-profile.component.css'
})
export class ClientProfileComponent {

}
