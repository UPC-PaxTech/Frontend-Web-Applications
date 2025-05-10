import { Component } from '@angular/core';
import {FavoriteListComponent} from '../../components/favorite-list/favorite-list.component';

@Component({
  selector: 'app-client-favorite',
  imports: [
    FavoriteListComponent
  ],
  templateUrl: './client-favorite.component.html',
  styleUrl: './client-favorite.component.css'
})
export class ClientFavoriteComponent {

}
