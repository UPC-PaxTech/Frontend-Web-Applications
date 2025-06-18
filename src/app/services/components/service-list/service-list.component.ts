import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Service } from '../../model/service.entity';
import {ServiceApiService} from '../../services/services-api.service';
import {NgForOf} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {Router, RouterLink} from '@angular/router';
import {Salon} from '../../../dashboard/models/Salon.entity';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-service-list',
  imports: [
    NgForOf,
    MatButton,
    MatIconModule
  ],
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent {
  @Input() services: Service[] = [];
  @Input() salon!: Salon;

  constructor(private router: Router) {
  }

  navigateWithService(service: Service) {
    this.router.navigate(['/client/appointment-maker', this.salon.salonId], {
      state: { selectedService: service }
    });
  }

}
