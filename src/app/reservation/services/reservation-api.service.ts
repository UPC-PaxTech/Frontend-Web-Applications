import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, map } from 'rxjs';
import { ReservationResponse } from './reservations.response';
import { Reservation } from '../model/reservation.entity';
import { ReservationAssembler } from './reservation.assembler';

@Injectable({
  providedIn: 'root'
})
export class ReservationApiService {
  private baseUrl = 'http://localhost:3000';
  private reservationEndpoint = '/reservationDetails';

  constructor(private http: HttpClient) {}

  getReservations(): Observable<Reservation[]> {
    return this.http.get<ReservationResponse[]>(`${this.baseUrl}${this.reservationEndpoint}`)
      .pipe(
        map(response => ReservationAssembler.toEntitiesFromResponse(response))
      );
  }
}
