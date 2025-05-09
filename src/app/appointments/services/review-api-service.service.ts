import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import {ReviewResponse} from './reviews.response';
import {Review} from '../model/reviews.entity';
import {ReviewAssembler} from './reviews.assembler';
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
