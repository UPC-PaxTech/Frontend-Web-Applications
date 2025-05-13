import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatCard, MatCardImage} from '@angular/material/card';
import {Salon} from '../../models/Salon.entity';
import {ReviewListComponent} from '../../components/review-list/review-list.component';
import {Review} from '../../models/review.entity';
import {ReviewApiService} from '../../services/review-api.service';
import {SalonApiService} from '../../services/salon-api.service';
import {MatButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {SalonProfile} from '../../../profile/models/salon-profile.entity';
import {ProfileService} from '../../../profileclient/service/profile-api.service';
import {SalonProfileApiService} from '../../../profile/services/salon-profile-api.service';

@Component({
  selector: 'app-salon',
  imports: [
    ReviewListComponent,
    MatCard,
    MatCardImage,
    MatButton,
    RouterLink,
    MatIcon
  ],
  templateUrl: './salon.component.html',
  styleUrl: './salon.component.css'
})
export class SalonComponent implements OnInit {
  @Input() salon!: Salon;
  @Input() profile!: SalonProfile;
  @Output() salonSelected = new EventEmitter<Salon>();

  reviews: Review[] = [];

  constructor(private reviewService: ReviewApiService, private salonService: SalonApiService, private profileService: SalonProfileApiService) {
  }

  ngOnInit() {
    this.reviewService.getReviews().subscribe(reviews => this.reviews = reviews);
    this.salonService.getSalons().subscribe(salons => this.salon = salons[0]);
    this.profileService.getProfileById(1).subscribe(profile => {
      console.log('Perfil cargado:', profile); // 👈 Asegúrate que esto muestra algo
      this.profile = profile;
    });
  }
}
