import {Review} from '../model/reviews.entity';
import {ReviewResponse} from './reviews.response';

export class ReviewAssembler {
  static toEntityFromResource(resource: ReviewResponse): Review {
    return {
      id: resource.id,
      author: resource.author,
      rating: resource.rating,
      text: resource.text,
      read: resource.read
    };
  }

  static toEntitiesFromResponse(resources: ReviewResponse[]): Review[] {
    return resources.map(this.toEntityFromResource);
  }
}
