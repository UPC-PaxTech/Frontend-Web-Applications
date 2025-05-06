import { Component, OnInit } from '@angular/core';
import {ReservationApiService} from './reservation/services/reservation-api.service';
import {Reservation} from './reservation/model/reservation.entity';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Frontend-Web-Applications';

  constructor(private reservationApi: ReservationApiService) {}

  ngOnInit(): void {
    this.reservationApi.getReservations().subscribe({
      next: (reservations: Reservation[]) => {
        console.log('📦 Reservaciones cargadas:', reservations);
      },
      error: (err) => {
        console.error('❌ Error al cargar reservaciones:', err);
      }
    })
  }
}
