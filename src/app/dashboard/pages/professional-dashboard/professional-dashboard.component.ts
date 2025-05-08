import {Component, OnInit} from '@angular/core';
import {Worker} from '../../models/worker.entity';
import {WorkerApiService} from '../../services/worker-api.service';
import {StaffListComponent} from '../../components/staff-list/staff-list.component';
import {UpcomingAppointmentsComponent} from '../../components/upcoming-appointments/upcoming-appointments.component';
@Component({
  selector: 'app-professional-dashboard',
  imports: [
    StaffListComponent,
    UpcomingAppointmentsComponent
  ],
  templateUrl: './professional-dashboard.component.html',
  styleUrl: './professional-dashboard.component.css'
})
export class ProfessionalDashboardComponent implements OnInit {
  worker: Worker[] = [];

  constructor(private staffService: WorkerApiService ) {
  }
  ngOnInit() {
    this.staffService.getWorkers().subscribe(worker => this.worker = worker);
  }

}
