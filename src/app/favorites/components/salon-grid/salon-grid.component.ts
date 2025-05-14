import { Component, OnInit } from '@angular/core';
import { SalonApiService} from '../../../dashboard/services/salon-api.service';
import {Salon} from '../../../dashboard/models/Salon.entity';
import { SalonItemComponent} from '../../../dashboard/components/salon-item/Salon-item.component';


@Component({
  selector: 'app-salon-grid',
  imports: [
    SalonItemComponent
  ],
  templateUrl: './salon-grid.component.html',
  styleUrl: './salon-grid.component.css'
})
export class SalonGridComponent implements OnInit {
  salons: Salon[] = [];

  constructor(private salonApiService: SalonApiService) {}

  ngOnInit(): void {
    this.salonApiService.getSalons().subscribe(salons => {
      this.salons = salons;
      console.log(salons);
    });
  }
}
