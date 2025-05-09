import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> af088205ef3b2f5ea06d31a1b009a0254cb555b2
import {AppointmentApiService} from './appointment-api-service.service';

describe('AppointmentApiService', () => {
  let service: AppointmentApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentApiService);
<<<<<<< HEAD

    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });
})

=======
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
>>>>>>> af088205ef3b2f5ea06d31a1b009a0254cb555b2
