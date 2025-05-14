import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { ReviewResponse } from './review.response';
import { Review } from '../models/review.entity';
import { ReviewAssembler } from './review.assembler';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ReviewApiService extends BaseService<ReviewResponse> {
  override resourceEndpoint = '/reviews';

  constructor() {
    super();
  }

  public getReviews(): Observable<Review[]> {
    return this.getAll().pipe(
      map(response => ReviewAssembler.toEntitiesFromResponse(response))
    );
  }
}
