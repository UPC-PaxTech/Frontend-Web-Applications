import { Component, OnInit } from '@angular/core';
import { SalonApiService} from '../../services/salon-api.service';
import {Salon} from '../../models/Salon.entity';
import { SalonItemComponent} from '../salon-item/Salon-item.component';
import {SalonAssembler} from '../../services/Salon.assembler';


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
    this.salonApiService.getAll().subscribe(salons => {
      this.salons = SalonAssembler.toEntitiesfromResponse(salons);
      console.log(salons);
    });
  }
}
