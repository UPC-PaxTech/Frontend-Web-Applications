import {Component, OnInit} from '@angular/core';
import {StaffListComponent} from '../../../dashboard/components/staff-list/staff-list.component';
import {Worker} from '../../../dashboard/models/worker.entity';
import {WorkerApiService} from '../../../dashboard/services/worker-api.service';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {MatCard, MatCardImage} from '@angular/material/card';
import {DatePickerComponent} from '../../../schedule/components/date-picker/date-picker.component';
import {ReviewListComponent} from '../../../dashboard/components/review-list/review-list.component';
import {ServiceListComponent} from '../../../services/components/service-list/service-list.component';

@Component({
  selector: 'app-appointment-maker',
  imports: [
    StaffListComponent,
    MatButton,
    MatIcon,
    RouterLink,
    MatCard,
    DatePickerComponent,
    MatCardImage,
    ReviewListComponent,
    ServiceListComponent
  ],
  templateUrl: './appointment-maker.component.html',
  styleUrl: './appointment-maker.component.css'
})
export class AppointmentMakerComponent {
  worker: Worker[] = [];

  constructor(private staffService: WorkerApiService) {
  }
  ngOnInit() {
    this.staffService.getWorkers().subscribe(worker => this.worker = worker);

  }
}
