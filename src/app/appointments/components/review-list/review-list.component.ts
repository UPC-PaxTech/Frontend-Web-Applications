import { Component, Input } from '@angular/core';
import {Review} from '../../model/reviews.entity';
import {ReviewItemComponent} from '../review-item/review-item.component';
import { CommonModule } from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';


@Component({
  selector: 'app-review-list-client',
  standalone: true,
  imports: [CommonModule, ReviewItemComponent, MatIcon, MatIconButton, MatFormField, MatLabel, MatFormField, MatInput, MatButton, MatFormField],
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent {
  @Input() reviews: Review[] = [];
}
