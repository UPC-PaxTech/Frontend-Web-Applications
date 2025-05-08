import { TestBed } from '@angular/core/testing';

<<<<<<< HEAD
import {AppointmentApiService} from './appointment-api-service.service';

describe('AppointmentApiService', () => {
  let service: AppointmentApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentApiService);
=======
import { AppointmentApiServiceService } from './appointment-api-service.service';

describe('AppointmentApiServiceService', () => {
  let service: AppointmentApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentApiServiceService);
>>>>>>> aaf1f84a86881360e6bfddc6e78675b49d9e618a
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
