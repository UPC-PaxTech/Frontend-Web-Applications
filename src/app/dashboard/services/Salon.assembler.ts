import {SalonsResponse, SalonsResource} from './Salon.response';
import {Salon} from '../models/Salon.entity';

export class SalonAssembler {
  static toEntityFromResource(resourse: SalonsResource): Salon {
    return {
      salonId: resourse.salonId,
      location: resourse.location,
      phone: resourse.phone,
      name: resourse.name
    };
  }
  static toEntitiesfromResponse(response: SalonsResponse): Salon[]{
    return response.salons.map(salon => this.toEntityFromResource(salon));

  }
}
