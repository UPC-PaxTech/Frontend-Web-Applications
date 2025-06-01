import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { ProfileSalonResponse } from './profile-salon.response';
import { SalonProfile } from '../models/salon-profile.entity';
import {catchError, map, Observable, retry} from 'rxjs';
import { SalonProfileAssembler } from './salon-profile.assembler';

@Injectable({
  providedIn: 'root'
})
export class SalonProfileApiService extends BaseService<ProfileSalonResponse> {
  override resourceEndpoint = '/salonProfiles';

  constructor() {
    super();
  }

  public getProfileById(id: number): Observable<SalonProfile> {
    return this.http.get<ProfileSalonResponse>(`${this.resourcePath()}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError),
        map(response => SalonProfileAssembler.toEntityFromResponse(response))
      );
  }








}
