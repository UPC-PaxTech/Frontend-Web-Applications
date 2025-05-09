import { Component, OnInit } from '@angular/core';
import {ClientAppointment} from '../../model/appointment.entity';
import {AppointmentApiService} from '../../services/appointment-api-service.service';
import {AppointmentsItemComponent} from '../appointments-item/appointments-item.component';
import {NgForOf} from '@angular/common';
<<<<<<< HEAD
import {ReviewApiService} from "../../services/review-api-service.service";
import {Review} from "../../model/reviews.entity";
import {ReviewListComponent} from "../review-list/review-list.component";
import {UpcomingAppointmentsComponent} from "../upcoming-appointments/upcoming-appointments.component";
=======
>>>>>>> af088205ef3b2f5ea06d31a1b009a0254cb555b2

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  imports: [
    AppointmentsItemComponent,
    NgForOf,
<<<<<<< HEAD
    ReviewListComponent,
    UpcomingAppointmentsComponent,
    ReviewListComponent,
    UpcomingAppointmentsComponent
=======
>>>>>>> af088205ef3b2f5ea06d31a1b009a0254cb555b2
  ],
  styleUrls: ['./appointments-list.component.css']
})
export class AppointmentsListComponent implements OnInit {
  appointments: ClientAppointment[] = [];
<<<<<<< HEAD
  reviews: Review[] = [];

  constructor(private appointmentService: AppointmentApiService, private reviewService: ReviewApiService) {}
=======

  constructor(private appointmentService: AppointmentApiService) {}
>>>>>>> af088205ef3b2f5ea06d31a1b009a0254cb555b2

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments(): void {
    this.appointmentService.getAppointments().subscribe({
      next: (data) => {
        console.log('Received appointments data:', data);
        this.appointments = data;
      },
      error: (error) => {
        console.error('Error loading appointments:', error);
      }
    });
<<<<<<< HEAD
    this.reviewService.getReviews().subscribe({
      next: (data) => {
        console.log('Received review data:', data);
        this.reviews =data;
      },
      error: (error) => {
        console.error('Error loading review data:', error);
      }
    })
=======
>>>>>>> af088205ef3b2f5ea06d31a1b009a0254cb555b2
  }

  trackById(index: number, item: ClientAppointment): string {
    return item.reservationId;
  }
}
