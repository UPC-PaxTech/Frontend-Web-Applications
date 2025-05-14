import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';
import { Review } from '../../../dashboard/models/review.entity';
import {ReviewApiService} from '../../../dashboard/services/review-api.service';
import {ReviewListComponent} from '../../../dashboard/components/review-list/review-list.component';

@Component({
  selector: 'app-reviews-tab',
  imports: [
    TranslatePipe,
    MatCard,
    MatCardContent,
    ReviewListComponent
  ],
  templateUrl: './reviews-tab.component.html',
  styleUrl: './reviews-tab.component.css'
})
export class ReviewsTabComponent {
  reviews: Review[] = [];
  constructor(private reviewService: ReviewApiService) {
  }
  ngOnInit() {
    this.reviewService.getReviews().subscribe(reviews => this.reviews = reviews);
  }
}
