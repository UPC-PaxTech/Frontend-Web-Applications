import { Component, Input } from '@angular/core';
import {Worker} from '../../models/worker.entity';
import {MatCard, MatCardHeader, MatCardImage, MatCardSubtitle} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-staff-item',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardSubtitle,
    MatCardImage,
    MatButton,
    MatIcon,
    TranslatePipe
  ],
  templateUrl: './staff-item.component.html',
  styleUrl: './staff-item.component.css'
})
export class StaffItemComponent {
@Input() worker!: Worker;

constructor() {}
}
