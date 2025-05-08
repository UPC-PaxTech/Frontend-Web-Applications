import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {ReservationComponent} from '../reservation/reservation.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  standalone: true,
  imports: [
    NgForOf,
    ReservationComponent,
    CommonModule
  ], // Aquí luego agregaremos CommonModule y el ReservationComponent
})
export class CalendarComponent {
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  hours = [
    '07:00', '08:00', '09:00', '10:00', '11:00',
    '12:00', '13:00', '14:00', '15:00', '16:00',
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
  ];

  workers = ['Todos', 'Gael Rivera', 'Kevin Chi'];
  currentWorkerIndex = 0;

  get currentWorker(): string {
    return this.workers[this.currentWorkerIndex];
  }

  swapWorker(): void {
    this.currentWorkerIndex = (this.currentWorkerIndex + 1) % this.workers.length;
  }

  appointments = [
    {
      service: 'Manicura',
      startTime: '09:00',
      endTime: '10:00',
      day: 'Monday',
      client: 'Ana Pérez',
      worker: 'Gael Rivera'
    },
    {
      service: 'Pedicura',
      startTime: '10:00',
      endTime: '11:00',
      day: 'Tuesday',
      client: 'Carlos Gómez',
      worker: 'Kevin Chi'
    },
    {
      service: 'Manicura',
      startTime: '12:00',
      endTime: '13:00',
      day: 'Wednesday',
      client: 'María Lopez',
      worker: 'Gael Rivera'
    },
    {
      service: 'Pedicura',
      startTime: '15:00',
      endTime: '16:00',
      day: 'Thursday',
      client: 'Laura Ríos',
      worker: 'Kevin Chi'
    }
  ];
}
