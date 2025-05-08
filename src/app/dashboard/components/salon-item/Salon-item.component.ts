import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatListItem} from '@angular/material/list';
import {Salon} from '../../models/Salon.entity';
import {MatCardActions, MatCardTitle} from '@angular/material/card';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-salon-item',
  imports: [
    MatListItem,
    MatCardTitle,
    MatCardActions,
    MatButton
  ],
  templateUrl: './Salon-item.component.html',
  styleUrl: './Salon-item.component.css'
})
export class SalonItemComponent {
  @Input() salon!: Salon;
  @Output() salonSelected = new EventEmitter<Salon>();
}
