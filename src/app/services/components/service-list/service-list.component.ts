import {Component, Input, OnInit} from '@angular/core';
import { Service } from '../../model/service.entity';
import {ServiceApiService} from '../../services/services-api.service';
import {NgForOf} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-service-list',
  imports: [
    NgForOf,
    MatButton,
    RouterLink
  ],
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent {
  @Input() services: Service[] = [];

}
