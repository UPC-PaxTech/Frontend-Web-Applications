import { Component, Input } from '@angular/core';
import { SalonProfile } from '../../models/salon-profile.entity';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css'],
  imports: [MatIconModule]
})
export class ProfileHeaderComponent {
  @Input() profile!: SalonProfile;
}
