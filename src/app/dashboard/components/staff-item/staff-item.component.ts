import { Component, Input } from '@angular/core';
import {Worker} from '../../models/worker.entity';
import {MatCard, MatCardHeader, MatCardSubtitle} from '@angular/material/card';

@Component({
  selector: 'app-staff-item',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardSubtitle
  ],
  templateUrl: './staff-item.component.html',
  styleUrl: './staff-item.component.css'
})
export class StaffItemComponent {
@Input() worker!: Worker;

constructor() {}
}
