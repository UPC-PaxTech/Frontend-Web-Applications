import { Injectable } from '@angular/core';
import { BaseService} from '../../shared/services/base.service';
import {FavoriteResource} from './favorite.resource';
import {Favorite} from '../model/favorite.entity';
import {FavoriteAssembler} from './favorite.assembler';
import {Observable, map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesApiService extends BaseService<FavoriteResource> {
  override resourceEndpoint= '/workers';
  constructor() {
    super();
  }
  public getFavorites(): Observable<Favorite[]> {
    return this.getAll().pipe(
      map(response => FavoriteAssembler.toEntitiesFromResponse(response)),
    )
  }
}




