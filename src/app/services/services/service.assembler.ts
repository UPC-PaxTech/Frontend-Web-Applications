import {Service} from '../model/service.entity';
import {ServiceResponse} from './service.response';

export class ServiceAssembler {
  static toEntityFromResource(resource: ServiceResponse): Service {
    return {
      id: resource.id,
      name: resource.name,
      description: resource.description,
      duration: resource.duration,
      price: resource.price,
      status: resource.status
    };
  }

  static toEntitiesFromResponse(resources: ServiceResponse[]): Service[] {
    return resources.map(this.toEntityFromResource);
  }
}
