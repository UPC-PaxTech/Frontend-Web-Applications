import { TestBed } from '@angular/core/testing';

import { ProfileService } from './profile-api.service';

describe('ProfileApiService', () => {
  let service: ProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
