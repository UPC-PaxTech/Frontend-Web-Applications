import { Component, OnInit } from '@angular/core';
import { AppointmentApiServiceService } from '../../services/appointment-api-service.service';
import { Appointment } from '../../models/appointment.entity';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upcoming-appointments',
  templateUrl: './upcoming-appointments.component.html',
  styleUrls: ['./upcoming-appointments.component.css'],
  imports: [CommonModule]
})
export class UpcomingAppointmentsComponent implements OnInit {
  upcomingAppointments: Appointment[] = [];

  constructor(private appointmentService: AppointmentApiServiceService) {}

  ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe(appointments => {
      const now = new Date();
      this.upcomingAppointments = appointments
        .filter(a => new Date(a.timeSlotStart) > now)
        .sort((a, b) => new Date(a.timeSlotStart).getTime() - new Date(b.timeSlotStart).getTime())
        .slice(0, 3); // mostrar los 3 más próximos
    });
  }

  formatTime(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  }

  formatDay(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString(undefined, { weekday: 'long', day: 'numeric' });
  }

  isToday(dateStr: string): boolean {
    const today = new Date();
    const date = new Date(dateStr);
    return today.toDateString() === date.toDateString();
  }
}
