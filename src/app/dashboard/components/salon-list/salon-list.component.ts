import { Component, OnInit } from '@angular/core';
import { SalonApiService } from '../../services/salon-api.service';
import {Salon} from '../../models/Salon.entity';

@Component({
  selector: 'app-salon-list',
  templateUrl: './salon-list.component.html'
})
export class SalonListComponent implements OnInit {
  salons: Salon[] = [];

  constructor(private salonApiService: SalonApiService) {}

  ngOnInit(): void {
    this.salonApiService.getSalons().subscribe(salons => {
      this.salons = salons;
    });
  }
}
