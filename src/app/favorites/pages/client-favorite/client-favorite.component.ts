import { Component } from '@angular/core';
import {
  UpcomingAppointmentsComponent
} from '../../../appointments/components/upcoming-appointments/upcoming-appointments.component';
import {SidebarClientComponent} from '../../../public/components/sidebar-client/sidebar-client.component';
import {SalonListComponent} from '../../../dashboard/components/salon-list/salon-list.component';

@Component({
  selector: 'app-client-favorite',
  imports: [
    UpcomingAppointmentsComponent,
    SidebarClientComponent,
    SalonListComponent
  ],
  templateUrl: './client-favorite.component.html',
  styleUrl: './client-favorite.component.css'
})
export class ClientFavoriteComponent {

}
