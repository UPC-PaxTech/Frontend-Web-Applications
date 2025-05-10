import { Component, OnInit } from '@angular/core';
import {AppointmentApiService} from '../../services/appointment-api.service';
import { Appointment } from '../../models/appointment.entity';
import { CommonModule } from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-upcoming-appointments',
  templateUrl: './upcoming-appointments.component.html',
  styleUrls: ['./upcoming-appointments.component.css'],
  imports: [CommonModule, TranslatePipe]
})
export class UpcomingAppointmentsComponent implements OnInit {
  upcomingAppointments: Appointment[] = [];

  constructor(private appointmentService: AppointmentApiService, private translate: TranslateService) {}

  ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe(appointments => {
      const now = new Date();
      this.upcomingAppointments = appointments
        .filter(a => new Date(a.timeSlotStart) > now)
        .sort((a, b) => new Date(a.timeSlotStart).getTime() - new Date(b.timeSlotStart).getTime())
        .slice(0, 3); // mostrar los 3 más próximos

      console.log('Upcoming Appointments:', this.upcomingAppointments)
    });
    console.log(this.upcomingAppointments);
  }

  formatTime(dateStr: string): string {
    const date = new Date(dateStr);
    const currentLang = this.translate.currentLang || 'en';
    return date.toLocaleTimeString(currentLang, { hour: 'numeric', minute: '2-digit' });
  }

  formatDay(dateStr: string): string {
    const date = new Date(dateStr);
    const currentLang = this.translate.currentLang || 'en';
    return date.toLocaleDateString(currentLang, { weekday: 'long', day: 'numeric' });
  }


  isToday(dateStr: string): boolean {
    const today = new Date();
    const date = new Date(dateStr);
    return today.toDateString() === date.toDateString();
  }
}
