import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {SalonsResponse} from './Salon.response';
import {map, Observable} from 'rxjs';
import {SalonAssembler} from './Salon.assembler';
import {Salon} from '../models/Salon.entity';

@Injectable({
  providedIn: 'root'
})
export class SalonApiService {
  private baseUrl = environment.serverBaseUrl;
  private detailsEndpoint = environment.salonEndpointPath;

  constructor(private http: HttpClient) {}

  getSalons():Observable<Salon[]> {
    return this.http.get<SalonsResponse>(`${this.baseUrl}${this.detailsEndpoint}`)
      .pipe(
        map(response => SalonAssembler.toEntitiesfromResponse(response))
      );
  }
}
