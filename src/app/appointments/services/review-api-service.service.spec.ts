import { TestBed } from '@angular/core/testing';

import {ReviewApiService} from './review-api-service.service';

describe('ReviewApiServiceService', () => {
  let service: ReviewApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
