import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteItemComponent } from '../favorite-item/favorite-item.component';
import { TranslatePipe } from '@ngx-translate/core';
import { Favorite } from '../../model/favorite.entity';
import { Review } from '../../../appointments/model/reviews.entity';
import {FavoritesApiService} from '../../services/favorites-api.service';
import { ReviewApiService } from '../../../appointments/services/review-api-service.service';
import { UpcomingAppointmentsComponent } from '../../../appointments/components/upcoming-appointments/upcoming-appointments.component';
import { ReviewListComponent } from '../../../appointments/components/review-list/review-list.component';

@Component({
  selector: 'app-favorite-list',
  standalone: true,
  imports: [
    CommonModule,
    FavoriteItemComponent,
    TranslatePipe,
    UpcomingAppointmentsComponent,
    ReviewListComponent
  ],
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {
  FavoriteList: Favorite[] = [];
  reviews: Review[] = [];

  constructor(
    private favoriteService: FavoritesApiService,
    private reviewService: ReviewApiService
  ) {}

  ngOnInit(): void {
    this.loadFavorites();
    this.loadReviews();
  }

  loadFavorites(): void {
    this.favoriteService.getFavorites().subscribe({
      next: (data) => {
        console.log('Received favorites data:', data);
        this.FavoriteList = data;
      },
      error: (error) => {
        console.error('Error loading favorites:', error);
      }
    });
  }

  loadReviews(): void {
    this.reviewService.getReviews().subscribe({
      next: (data) => {
        console.log('Received review data:', data);
        this.reviews = data;
      },
      error: (error) => {
        console.error('Error loading reviews:', error);
      }
    });
  }

  trackByName(index: number, item: Favorite): string {
    return item.nombre;
  }
}
