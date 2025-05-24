import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
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
import {Review} from '../../models/review.entity';
import {ReviewApiService} from '../../services/review-api.service';


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
export class SalonItemComponent implements OnInit{
  @Input() salon!: Salon;
  @Output() salonSelected = new EventEmitter<Salon>();
  private reviewService = inject(ReviewApiService)
  reviews: Review[] = [];
  reviewAverage = 0;
  constructor() { }

  ngOnInit() {
    this.reviewService.getBySalonId(this.salon.salonId).subscribe(reviews => this.reviews = reviews);
    this.reviews.forEach(review=> this.reviewAverage+= review.rating)
  }


}
