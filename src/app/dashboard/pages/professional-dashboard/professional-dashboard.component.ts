import {Component, OnInit} from '@angular/core';
import {Worker} from '../../models/worker.entity';
import {WorkerApiService} from '../../services/worker-api.service';
import {StaffListComponent} from '../../components/staff-list/staff-list.component';
import {UpcomingAppointmentsComponent} from '../../components/upcoming-appointments/upcoming-appointments.component';
import {Review} from '../../models/review.entity';
import {ReviewApiService} from '../../services/review-api.service';
import {ReviewListComponent} from '../../components/review-list/review-list.component';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';
import {ToolbarProviderComponent} from '../../../public/components/toolbar-provider/toolbar-provider.component';
import {TranslatePipe} from '@ngx-translate/core';
@Component({
  selector: 'app-professional-dashboard',
  imports: [
    StaffListComponent,
    UpcomingAppointmentsComponent,
    ReviewListComponent,
    MatCard,
    /**
     MatCardTitle,
     <<<<<<< HEAD
     MatCardContent,
     <<<<<<< HEAD
     ToolbarProviderComponent
     =======
     */
    MatCardContent,
    TranslatePipe

  ],
  templateUrl: './professional-dashboard.component.html',
  styleUrl: './professional-dashboard.component.css'
})
export class ProfessionalDashboardComponent implements OnInit {
  worker: Worker[] = [];
  reviews: Review[] = [];

  constructor(private staffService: WorkerApiService, private reviewService: ReviewApiService) {
  }
  ngOnInit() {
    this.staffService.getWorkers().subscribe(worker => this.worker = worker);
    this.reviewService.getReviews().subscribe(reviews => this.reviews = reviews);
  }

}
