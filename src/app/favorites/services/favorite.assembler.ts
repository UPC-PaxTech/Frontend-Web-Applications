import {FavoriteResource} from './favorite.resource';
import {Favorite} from '../model/favorite.entity';

export class FavoriteAssembler {
  static  toEntityFromResource(resource: FavoriteResource): Favorite {
    return {
      id: resource.workerId,
      nombre: resource.nombre,
      especializacion: resource.especializacion,
      foto: resource.fotoUrl
    }
  }
  static toEntitiesFromResponse(resources: FavoriteResource[]): Favorite[] {
    return resources.map(resource => this.toEntityFromResource(resource));
  }
}
