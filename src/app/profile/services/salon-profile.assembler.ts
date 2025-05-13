import {SalonProfile} from '../models/salon-profile.entity';
import {SalonProfileResponse} from './salon-profile.response';

export class SalonProfileAssembler {
  static toEntityFromResponse(resource: SalonProfileResponse): SalonProfile {
    return {
      profileId: resource.id || 0,
      userId: resource.userId || '',
      salonName: resource.salonName || '',
      rating: resource.rating || 0,
      profileImage: resource.profileImage || '',
      coverImage: resource.coverImage || '',
      socials: resource.socials || '',
      portfolioImages: resource.portfolioImages || '',
      address: resource.Address,
      email: resource.salonemail,
      accounts: resource.accounts
    };
  }

  static toEntitiesFromResponse(resources: SalonProfileResponse[]): SalonProfile[] {
    return resources.map(this.toEntityFromResponse);
  }

  static toResponseFromEntity(entity: SalonProfile): SalonProfileResponse {
    return {
      id: entity.profileId || 0,
      userId: entity.userId || '',
      salonName: entity.salonName || '',
      rating: entity.rating || 0,
      profileImage: entity.profileImage || '',
      coverImage: entity.coverImage || '',
      socials: entity.socials || { instagram: '', tiktok: '' },
      portfolioImages: entity.portfolioImages || [],
      Address: entity.address || '',
      salonemail: entity.email || '',
      accounts: entity.accounts || {
        accountId: '',
        email: '',
        passwordHash: '',
        isActive: false
      }
    };
  }

}
