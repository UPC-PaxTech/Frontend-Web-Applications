import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { BaseService } from '../../shared/services/base.service';
import { AppointmentResponse } from './appointment.response';
import {ClientAppointment} from '../model/appointment.entity';
import { AppointmentAssembler } from './appointment.assembler';
import { Observable, map } from 'rxjs';
=======
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, map} from 'rxjs';
import {ClientAppointment} from '../model/appointment.entity';
import {AppointmentResponse} from './appointment.response';
import {AppointmentAssembler} from './appointment.assembler';
>>>>>>> aaf1f84a86881360e6bfddc6e78675b49d9e618a

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD
export class AppointmentApiService extends BaseService<AppointmentResponse> {
  override resourceEndpoint = '/reservationDetails';

  constructor() {
    super();
  }

  /** Convierte los response en entidades limpias */
  public getAppointments(): Observable<ClientAppointment[]> {
    return this.getAll().pipe(
      map(response => AppointmentAssembler.toEntitiesFromResponse(response))
    );
  }
=======
export class AppointmentApiServiceService {
  private baseUrl = environment.serverBaseUrl;
  private detailsEndpoint = environment.appointmentEndpointPath;

  constructor(private http: HttpClient) {}

  getAppointments(): Observable<ClientAppointment[]> {
    return this.http.get<AppointmentResponse[]>(`${this.baseUrl}${this.detailsEndpoint}`)
      .pipe(
        map(response => AppointmentAssembler.toEntitiesFromResponse(response))
      );
  }


>>>>>>> aaf1f84a86881360e6bfddc6e78675b49d9e618a
}
