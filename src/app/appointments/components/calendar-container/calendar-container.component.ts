import {Component, inject, Input, OnInit} from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import {FullCalendarModule} from '@fullcalendar/angular';
import {AppointmentApiService} from '../../../dashboard/services/appointment-api.service';
import {AppointmentAssembler} from '../../../dashboard/services/appointment.assembler';
import {AppointmentResponse} from '../../../dashboard/services/appointment.response';
import {Appointment} from '../../../dashboard/models/appointment.entity';
import {ActivatedRoute, Route} from '@angular/router';
import {Service} from '../../../services/model/service.entity';

@Component({
  selector: 'app-week-calendar',
  template: `
    <full-calendar [options]="calendarOptions"></full-calendar>`,
  imports: [
    FullCalendarModule
  ],
  styleUrls: []
})
export class WeekCalendarComponent implements OnInit{
  @Input() service!: Service
  calendarOptions: CalendarOptions = {
    plugins: [interactionPlugin, timeGridPlugin],
    initialView: 'timeGridWeek',
    selectable: true,
    selectMirror: true,
    allDaySlot: false,
    slotDuration: '00:30:00',
    select: this.handleDateSelect.bind(this),
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'timeGridWeek,timeGridDay'
    },
    events: []
  };

  appointments: Appointment[] = [];
  selectedService!: Service;
  private appointmentService = inject(AppointmentApiService)

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const salonId = Number(this.route.snapshot.paramMap.get('id'));
    this.selectedService = history.state.selectedService;
    console.log('Servicio recibido:', this.selectedService);
    this.appointmentService.getAll().subscribe(response => {
      this.appointments = AppointmentAssembler.toEntitiesFromResponse(response).filter(appointment => appointment.salonId === salonId);
      const events: EventInput[] = this.appointments.map((a) => ({
        title: `${a.tipo} - ${a.clientName}`,
        start: a.timeSlotStart,
        end: a.timeSlotEnd,
        extendedProps: { reservationId: a.reservationId }
      }))
      this.calendarOptions = {
        ...this.calendarOptions,
        events: events
      };
      console.log(this.calendarOptions);
    })
  }



  handleDateSelect(selectInfo: any) {
    const start = new Date(selectInfo.start);
    const durationMinutes = this.selectedService?.duration || 30;
    const end = new Date(start.getTime() + durationMinutes * 60000); // suma minutos

    // Aumentamos +10 minutos de tolerancia al inicio y final de cada cita existente
    const overlaps = this.appointments.some(appointment => {
      const existingStart = new Date(appointment.timeSlotStart);
      const existingEnd = new Date(appointment.timeSlotEnd);

      // Añadir 10 minutos de margen
      const bufferedStart = new Date(existingStart.getTime() - 10 * 60000);
      const bufferedEnd = new Date(existingEnd.getTime() + 10 * 60000);

      return start < bufferedEnd && end > bufferedStart;
    });

    if (overlaps) {
      alert("⚠ Ya existe una cita reservada muy cerca de ese horario. Intenta con otro.");
      return;
    }

    const confirmed = confirm(`¿Reservar cita de ${start.toLocaleTimeString()} a ${end.toLocaleTimeString()} para ${this.selectedService.name}?`);
    if (!confirmed) return;

    const postData: AppointmentResponse = {
      reservationId: 'resGenerated', // reemplaza si usas UUID o ID real
      tipo: this.selectedService.name,
      client: {
        clientId: 'client1',
        birthDate: '1990-01-01',
        user: {
          userId: 'user1',
          name: 'Test User'
        }
      },
      salon: {
        salonId: Number(this.route.snapshot.paramMap.get('id')) // solo el ID
      },
      payment: {
        paymentId: 'pay-temp',
        amount: this.selectedService.price,
        currency: 'USD',
        status: false
      },
      timeSlot: {
        timeSlotId: 'ts-temp',
        start: start.toISOString(),
        end: end.toISOString(),
        status: true,
        tipo: 'Custom'
      },
      worker: {
        workerId: 'worker1',
        name: 'Staff Predeterminado'
      }
    };

    // POST a la API
    this.appointmentService.post(postData).subscribe({
      next: () => {
        alert("✅ Cita reservada con éxito.");
        // Recargar eventos para mostrar la nueva cita
        this.ngOnInit(); // opción rápida (puedes hacer mejor con `loadAppointments`)
      },
      error: (e) => {
        alert("❌ Error al reservar cita: " + e.message);
      }
    });
  }

}
