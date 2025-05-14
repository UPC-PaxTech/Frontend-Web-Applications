import {Component, Input} from '@angular/core';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableModule
} from '@angular/material/table';
import { Service} from '../../model/service.entity';
import {TranslatePipe} from '@ngx-translate/core';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-service-table',
  imports: [
    MatTable,
    MatIcon,
    TranslatePipe,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatIconButton,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRow,
    MatRowDef
  ],
  templateUrl: './service-table.component.html',
  styleUrl: './service-table.component.css'
})
export class ServiceTableComponent {
  displayedColumns: string[] = ['name', 'duration', 'price', 'status', 'actions'];
  @Input() services: Service[] = [];

  onNewService(){

  }
}
