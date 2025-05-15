import {Component, inject, Input} from '@angular/core';
import {Review} from '../../model/reviews.entity';
import { ReviewItemComponent } from '../review-item/review-item.component';
import { CommonModule } from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {ReviewResponse} from '../../../dashboard/services/review.response';
import {ReviewApiService} from '../../../dashboard/services/review-api.service';


@Component({
  selector: 'app-review-list-client',
  standalone: true,
  imports: [CommonModule, ReviewItemComponent, MatIcon, MatIconButton, MatFormField, MatLabel, MatFormField, MatInput, MatButton, MatFormField, FormsModule],
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent {
  @Input() reviews: Review[] = [];



  serviciodeApi: ReviewApiService = inject(ReviewApiService);

  reviewInput: string = '';
  reviewrating: number = 0;

  public postReview(): void {
    const reviewPost: ReviewResponse = {
      author: "Anonimo",
      rating: this.reviewrating,
      text: this.reviewInput,
      read: true
    }

    this.serviciodeApi.post(reviewPost).subscribe({
      next: () =>alert('Review posted'),
      error: (e) => alert('Error posting review: ' + e.message)
    });

    this.reviewInput = '';
  }






}
