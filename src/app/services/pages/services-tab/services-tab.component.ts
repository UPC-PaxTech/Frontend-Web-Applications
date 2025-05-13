import { Component, OnInit } from '@angular/core';
import { Service} from '../../model/service.entity';
import {ServiceApiService} from '../../services/services-api.service';
//import {ServiceListComponent} from '../../components/service-list/service-list.component';
import {TranslatePipe} from '@ngx-translate/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {ServiceTableComponent} from '../../components/service-table/service-table.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-services-tab',
  imports: [
    TranslatePipe,
    MatIconButton,
    MatIcon,
    ServiceTableComponent,
    NgIf,

  ],
  templateUrl: './services-tab.component.html',
  styleUrl: './services-tab.component.css'
})
export class ServicesTabComponent {
  service: Service[] = [];
  constructor(private serviceService: ServiceApiService) {
  }
  ngOnInit() {
    this.serviceService.getServices().subscribe(service => this.service = service);
  }
}
