import {Component, Input} from '@angular/core';
import {FavoriteItemComponent} from '../favorite-item/favorite-item.component';
import {TranslatePipe} from '@ngx-translate/core';
import {Favorite} from '../../model/favorite.entity';

@Component({
  selector: 'app-favorite-list',
  imports: [
    FavoriteItemComponent,
    TranslatePipe
  ],
  templateUrl: './favorite-list.component.html',
  styleUrl: './favorite-list.component.css'
})
export class FavoriteListComponent {
  @Input() FavoriteList: Favorite[]= [];
}
