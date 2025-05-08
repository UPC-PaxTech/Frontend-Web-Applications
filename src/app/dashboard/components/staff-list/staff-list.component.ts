import { Component, Input } from '@angular/core';
import {Worker} from '../../models/worker.entity';
import {StaffItemComponent} from '../staff-item/staff-item.component';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-staff-list',
  imports: [CommonModule, StaffItemComponent],
  templateUrl: './staff-list.component.html',
  styleUrl: './staff-list.component.css'
})
export class StaffListComponent {
  @Input() WorkerList: Worker[]= [];
}
