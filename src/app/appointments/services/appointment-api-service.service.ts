import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { AppointmentResponse } from './appointment.response';
import {ClientAppointment} from '../model/appointment.entity';
import { AppointmentAssembler } from './appointment.assembler';
import { Observable, map } from 'rxjs';
<<<<<<< HEAD
=======

>>>>>>> af088205ef3b2f5ea06d31a1b009a0254cb555b2
@Injectable({
  providedIn: 'root'
})
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
}
