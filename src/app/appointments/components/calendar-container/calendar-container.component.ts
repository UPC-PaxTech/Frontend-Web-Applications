import {Component, inject, Input, OnInit} from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import {FullCalendarModule} from '@fullcalendar/angular';

import {ClientAppointment} from '../../model/appointment.entity';



import {ActivatedRoute, Route} from '@angular/router';
import {Service} from '../../../services/model/service.entity';
import {Worker} from '../../../dashboard/models/worker.entity';
import {AppointmentApiService} from '../../services/appointment-api-service.service';
import {AppointmentAssembler} from '../../services/appointment.assembler';
import {AppointmentResponse} from '../../services/appointment.response';
import {TimeSlotApiService} from '../../services/time-slot-api.service';
import {PaymentApiService} from '../../services/payment-api.service';
import {ReservationApiService} from '../../services/reservation-api.service';

@Component({
  selector: 'app-week-calendar',
  template: '<full-calendar [options]="calendarOptions"></full-calendar>',
  standalone: true,
  imports: [FullCalendarModule]
})
export class WeekCalendarComponent implements OnInit {

  @Input({ required: true }) service!: Service;   // servicio elegido
  @Input({ required: false }) worker!: Worker;     // staff elegido

  calendarOptions: CalendarOptions = {
    plugins: [interactionPlugin, timeGridPlugin],
    initialView: 'timeGridWeek',
    selectable: true,
    slotDuration: '00:30:00',
    headerToolbar: { left: 'prev,next today', center: 'title', right: 'timeGridWeek,timeGridDay' },
    events: [],
    select: this.handleDateSelect.bind(this)
  };

  private appointments: ClientAppointment[] = [];
  private api   = inject(AppointmentApiService);
  private route = inject(ActivatedRoute);

  private timeSlotApi = inject(TimeSlotApiService);
  private paymentApi = inject(PaymentApiService);
  private reservationApi = inject(ReservationApiService);

  ngOnInit(): void { this.loadAppointments(); }

  /* ---------- Carga citas existentes ---------- */
  private loadAppointments(): void {
    const providerId = Number(this.route.snapshot.paramMap.get('id'));

    this.api.getAll().subscribe(res => {
      this.appointments = AppointmentAssembler.toEntitiesFromResponse(res)
        .filter(a => a.provider.id === providerId);

      const events: EventInput[] = this.appointments.map(a => ({
        title: `${a.workerId.specialization} - cliente ${a.clientId}`,
        start: a.timeSlot.startTime,
        end:   a.timeSlot.endTime,
        extendedProps: { appointmentId: a.id }
      }));

      this.calendarOptions = { ...this.calendarOptions, events };
    });
  }

  /* ---------- Selección y POST ---------- */
  private handleDateSelect(sel: any): void {
    const duration = this.service?.duration ?? 30;
    const start = new Date(sel.start);
    const end = new Date(start.getTime() + duration * 60000);

    const overlaps = this.appointments.some(ap => {
      const s = new Date(ap.timeSlot.startTime).getTime() - 10 * 60000;
      const e = new Date(ap.timeSlot.endTime).getTime() + 10 * 60000;
      return start.getTime() < e && end.getTime() > s;
    });
    if (overlaps) { alert('⚠ Hay otra cita muy cerca.'); return; }

    if (!confirm(`Reservar de ${start.toLocaleTimeString()} a ${end.toLocaleTimeString()}?`)) return;

    const providerId = Number(this.route.snapshot.paramMap.get('id'));
    const clientId = Number(localStorage.getItem('clientId'));
    if (!clientId) {
      alert('No se encontró clientId en sesión. Vuelve a iniciar sesión.');
      return;
    }
    const workerId = this.worker.id;

    const startIsoLocal = start.toISOString().slice(0,19); // quita la 'Z'
    const endIsoLocal   = end.toISOString().slice(0,19);

    // 👉 Paso 1: Crear TimeSlot
    this.timeSlotApi.post({
      id: 0,
      startTime: startIsoLocal,
      endTime: endIsoLocal,
      status: true,
      type: this.worker.specialization,
    }).subscribe(timeSlot => {

      // 👉 Paso 2: Crear Payment
      this.paymentApi.post({
        id: 0,
        amount: this.service.price,
        currency: 'USD',
        status: false
      }).subscribe(payment => {

        // 👉 Paso 3: Crear la Reservation
        this.reservationApi.post({
          clientId,
          providerId,
          paymentId: payment.id,
          timeSlotId: timeSlot.id,
          workerId
        }).subscribe({
          next: () => { alert('✅ Cita reservada'); this.loadAppointments(); },
          error: e => alert('❌ Error en reserva: ' + e.message)
        });

      }, err => alert('❌ Error en pago: ' + err.message));

    }, err => alert('❌ Error en horario: ' + err.message));
  }

}

