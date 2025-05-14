import {Component, OnInit} from '@angular/core';
import {ProfileHeaderComponent} from '../../components/profile-header/profile-header.component';
import {SalonProfile} from '../../models/salon-profile.entity';
import {SalonProfileApiService} from '../../services/salon-profile-api.service';
import {ProfilePortfolioComponent} from '../../components/profile-portfolio/profile-portfolio.component';
import {ReviewListComponent} from '../../components/review-list/review-list.component';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-profile-page',
  imports: [ProfileHeaderComponent, ProfilePortfolioComponent, ReviewListComponent, TranslatePipe],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent implements OnInit {
 profile!: SalonProfile;

 constructor(private profileService: SalonProfileApiService) {}

  ngOnInit() {
    this.profileService.getProfileById(1).subscribe(profile => {
      console.log('Perfil cargado:', profile); // 👈 Asegúrate que esto muestra algo
      this.profile = profile;
    });
  }
}
