import { Component, OnInit } from '@angular/core';
import {ClientAppointment} from '../../model/appointment.entity';
import {AppointmentApiService} from '../../services/appointment-api-service.service';
import {AppointmentsItemComponent} from '../appointments-item/appointments-item.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  imports: [
    AppointmentsItemComponent,
    NgForOf,
  ],
  styleUrls: ['./appointments-list.component.css']
})
export class AppointmentsListComponent implements OnInit {
  appointments: ClientAppointment[] = [];

  constructor(private appointmentService: AppointmentApiService) {}

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
  }

  trackById(index: number, item: ClientAppointment): string {
    return item.reservationId;
  }
}
