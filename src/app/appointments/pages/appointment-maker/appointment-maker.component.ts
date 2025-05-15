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

import {AppointmentApiService} from '../../../dashboard/services/appointment-api.service';  // importa servicio citas
import {Appointment} from '../../../dashboard/models/appointment.entity';
import {AppointmentResponse} from '../../../dashboard/services/appointment.response';

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


export class AppointmentMakerComponent implements OnInit {
  worker: Worker[] = [];

  // Guardamos selección para POST
  selectedReservation: {date: Date, timeSlot: any} | null = null;

  constructor(
    private staffService: WorkerApiService,
    private appointmentService: AppointmentApiService
  ) {}

  ngOnInit() {
    this.staffService.getWorkers().subscribe(worker => this.worker = worker);
  }

  onReservationConfirmed(event: {date: Date, timeSlot: any}) {
    this.selectedReservation = event;
  }

  bookAppointment() {
    if (!this.selectedReservation) {
      alert('Por favor seleccione fecha y rango horario');
      return;
    }

    // Construir payload con los datos estáticos + fecha y hora seleccionada
    const date = this.selectedReservation.date;
    const slot = this.selectedReservation.timeSlot;

    // Construir fechas completas con día seleccionado + hora rango
    const startDate = new Date(date);
    startDate.setHours(slot.start.getHours(), slot.start.getMinutes(), 0, 0);

    const endDate = new Date(date);
    endDate.setHours(slot.end.getHours(), slot.end.getMinutes(), 0, 0);

    const postData: AppointmentResponse = {
        "reservationId": "res10",
        "tipo": "Express Cut",
        "client": { "clientId": "client10", "birthDate": "1990-01-01T00:00:00Z", "user": { "userId": "user10", "name": "Test User" } },
        "salon": { "salonId": "salon1", "location": "Test Location", "phone": "000000000" },
        "payment": { "paymentId": "pay10", "amount": 50, "currency": "USD", "status": true },
        timeSlot: {
        timeSlotId: slot.id,
        start: startDate.toISOString(),
        end: endDate.toISOString(),
        status: true,
        tipo: slot.tipo
      },
        "worker": { "workerId": "worker10", "name": "New Worker" }
      };





    this.appointmentService.post(postData).subscribe({
      next: () => alert('¡Cita reservada con éxito!'),
      error: (e) => alert('Error al reservar cita: ' + e.message)
    });

  }
}
