import {SalonsResponse, SalonsResource} from './Salon.response';
import {Salon} from '../models/Salon.entity';

export class SalonAssembler {
  static toEntityFromResource(resource: SalonsResource): Salon {
    return {
      salonId: resource.salonId,
      location: resource.location,
      phone: resource.phone,
      name: resource.name
    };
  }

  static toEntitiesfromResponse(response: SalonsResponse): Salon[] {
    // No need for type assertion - response is now properly typed as an array
    return response.map(salon => this.toEntityFromResource(salon));
  }
}
