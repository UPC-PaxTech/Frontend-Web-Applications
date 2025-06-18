import { Component } from '@angular/core';
import {ProfileComponent} from '../../components/profile/profile.component';
import {SidebarClientComponent} from '../../../public/components/sidebar-client/sidebar-client.component';

@Component({
  selector: 'app-client-profile',
  imports: [
    ProfileComponent,
    SidebarClientComponent,
  ],
  templateUrl: './client-profile.component.html',
  styleUrl: './client-profile.component.css'
})
export class ClientProfileComponent {

}
