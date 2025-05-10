import { Component } from '@angular/core';
import {ProfileComponent} from '../../components/profile/profile.component';

@Component({
  selector: 'app-client-profile',
  imports: [
    ProfileComponent
  ],
  templateUrl: './client-profile.component.html',
  styleUrl: './client-profile.component.css'
})
export class ClientProfileComponent {

}
