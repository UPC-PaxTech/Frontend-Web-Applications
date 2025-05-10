import {SalonProfile} from '../models/salon-profile.entity';
import {SalonProfileResponse} from './salon-profile.response';

export class SalonProfileAssembler {
  static toEntityFromResponse(resource: SalonProfileResponse): SalonProfile {
    return {
      profileId: resource.profileId || '',
      userId: resource.userId || '',
      salonName: resource.salonName || '',
      rating: resource.rating || 0,
      profileImage: resource.profileImage || '',
      coverImage: resource.coverImage || '',
      socials: resource.socials || '',
      portfolioImages: resource.portfolioImages || ''
    };
  }

  static toEntitiesFromResponse(resources: SalonProfileResponse[]): SalonProfile[] {
    return resources.map(this.toEntityFromResponse);
  }
}
