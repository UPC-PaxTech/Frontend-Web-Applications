import { TestBed } from '@angular/core/testing';

import { AppointmentApiServiceService } from './appointment-api-service.service';

describe('AppointmentApiServiceService', () => {
  let service: AppointmentApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
