import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {SalonsResource} from './Salon.response';

import {BaseService} from '../../shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class SalonApiService extends BaseService<SalonsResource>{
  private baseUrl = environment.serverBaseUrl;
  private detailsEndpoint = "/salons";
  override resourceEndpoint = '/salons';

  constructor() {
    super();
  }

}
