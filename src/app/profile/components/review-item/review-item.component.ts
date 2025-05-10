import { Component, Input } from '@angular/core';
import {Review} from '../../../dashboard/models/review.entity';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-review-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.css']
})
export class ReviewItemComponent {
  @Input() review!: Review;  // Recibe una sola review
}
