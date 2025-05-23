import { Component, OnInit } from '@angular/core';
import { SalonApiService } from '../../services/salon-api.service';
import {Salon} from '../../models/Salon.entity';
import {SalonItemComponent} from '../salon-item/Salon-item.component';
import {SalonAssembler} from '../../services/Salon.assembler';


@Component({
  selector: 'app-salon-list',
  imports: [
    SalonItemComponent
  ],
  templateUrl: './salon-list.component.html',
  styleUrl: './salon-list.component.css'
})
export class SalonListComponent implements OnInit {
  salons: Salon[] = [];

  constructor(private salonApiService: SalonApiService) {}

  ngOnInit(): void {
    this.salonApiService.getAll().subscribe(salons => {
      this.salons = SalonAssembler.toEntitiesfromResponse(salons);
      console.log(salons);
    });
  }
}
