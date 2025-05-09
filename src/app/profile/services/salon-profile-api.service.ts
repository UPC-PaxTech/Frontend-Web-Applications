import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { SalonProfileResponse } from './salon-profile.response';
import { SalonProfile } from '../models/salon-profile.entity';
import {catchError, map, Observable, retry} from 'rxjs';
import { SalonProfileAssembler } from './salon-profile.assembler';

@Injectable({
  providedIn: 'root'
})
export class SalonProfileApiService extends BaseService<SalonProfileResponse> {
  override resourceEndpoint = '/salonProfiles';

  constructor() {
    super();
  }

  public getProfileById(id: string): Observable<SalonProfile> {
    return this.http.get<SalonProfileResponse>(`${this.resourcePath()}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError),
        map(response => SalonProfileAssembler.toEntityFromResponse(response))
      );
  }

}
