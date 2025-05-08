import { Component, OnInit } from '@angular/core';
import { SalonApiService } from '../../services/salon-api.service';
import {Salon} from '../../models/Salon.entity';
import {SalonItemComponent} from '../salon-item/Salon-item.component';

@Component({
  selector: 'app-salon-list',
  imports: [
    SalonItemComponent
  ],
  templateUrl: './salon-list.component.html'
})
export class SalonListComponent implements OnInit {
  salons: Salon[] = [];

  constructor(private salonApiService: SalonApiService) {}

  ngOnInit(): void {
    this.salonApiService.getSalons().subscribe(salons => {
      this.salons = salons;
      console.log(salons);
    });
  }
}
