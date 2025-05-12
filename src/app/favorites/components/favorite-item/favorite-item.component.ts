import { Component, Input } from '@angular/core';
import {Favorite} from '../../model/favorite.entity';
import {MatButton} from '@angular/material/button';
import {MatCard} from '@angular/material/card';
import {TranslatePipe} from '@ngx-translate/core';
import {MatIcon} from '@angular/material/icon';
import {Worker} from '../../../dashboard/models/worker.entity';

@Component({
  selector: 'app-favorite-item',
  imports: [
    MatButton,
    MatCard,
    MatIcon,
    TranslatePipe
  ],
  templateUrl: './favorite-item.component.html',
  styleUrl: './favorite-item.component.css'
})
export class FavoriteItemComponent {
  @Input() favorite!: Favorite;
}
