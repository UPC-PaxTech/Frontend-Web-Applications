import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatListItem} from '@angular/material/list';
import {Salon} from '../../models/Salon.entity';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardTitle
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {ReviewListComponent} from '../review-list/review-list.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-salon-item',
  imports: [
    MatCardTitle,
    MatCardActions,
    MatButton,
    MatCardImage,
    MatCardHeader,
    MatCardContent,
    MatCard,
    ReviewListComponent,
    RouterLink
  ],
  templateUrl: './Salon-item.component.html',
  styleUrl: './Salon-item.component.css'
})
export class SalonItemComponent {
  @Input() salon!: Salon;
  @Output() salonSelected = new EventEmitter<Salon>();
}
