import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, map} from 'rxjs';
import {Appointment} from '../models/appointment.entity';
import {AppointmentResponse} from './appointment.response';
import {AppointmentAssembler} from './appointment.assembler';

@Injectable({
  providedIn: 'root'
})
export class AppointmentApiServiceService {
  private baseUrl = environment.serverBaseUrl;
  private detailsEndpoint = environment.appointmentEndpointPath;

  constructor(private http: HttpClient) {}

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<AppointmentResponse[]>(`${this.baseUrl}${this.detailsEndpoint}`)
      .pipe(
        map(response => AppointmentAssembler.toEntitiesFromResponse(response))
      );
  }


}
