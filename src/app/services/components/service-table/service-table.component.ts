import {Component, inject, Input} from '@angular/core';
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
import {ServiceApiService} from '../../services/services-api.service';
import { ServiceAssembler } from '../../services/service.assembler';
import {MatSnackBar} from '@angular/material/snack-bar';

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

  private servicesService: ServiceApiService = inject(ServiceApiService)

  constructor(private snackBar: MatSnackBar) {}

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(ServiceDialogComponent, {
      data: { isEdit: false }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.servicesService.create(null, result).subscribe(() => {
          this.snackBar.open('✅ Servicio creado con éxito.', 'Cerrar', { duration: 2000 });
        });
      }
    });
  }


  public createService(){}


  public updateService(){
  }

  public deleteService() {
    this.snackBar.open('🗑️ Service deleted.', 'Close', { duration: 2000 });
  }

}
