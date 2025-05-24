import {Component, OnInit} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';
import { Review } from '../../../dashboard/models/review.entity';
import {ReviewApiService} from '../../../dashboard/services/review-api.service';
import {ReviewListComponent} from '../../../dashboard/components/review-list/review-list.component';
import {ReviewAssembler} from '../../../dashboard/services/review.assembler';

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
export class ReviewsTabComponent implements OnInit{
  reviews: Review[] = [];
  average = 0;
  constructor(private reviewService: ReviewApiService) {
  }
  ngOnInit() {
    this.reviewService.getBySalonId(1).subscribe(resource => {
      this.reviews = ReviewAssembler.toEntitiesFromResponse(resource);
      console.log(this.reviews);
      this.reviews.forEach(review => this.average += review.rating);
      this.average /= this.reviews.length;
    })

  }
}
