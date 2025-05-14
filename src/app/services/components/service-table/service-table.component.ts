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
import {MatButton, MatIconButton} from '@angular/material/button';
import {ServiceApiService} from '../../services/services-api.service';
import { ServiceAssembler } from '../../services/service.assembler';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ServiceResponse} from '../../services/service.response';

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
    MatRowDef,
    MatButton
  ],
  templateUrl: './service-table.component.html',
  styleUrl: './service-table.component.css'
})
export class ServiceTableComponent {
  displayedColumns: string[] = ['name', 'duration', 'price', 'status', 'actions'];
  @Input() services: Service[] = [];

  private servicesService: ServiceApiService = inject(ServiceApiService)

  constructor(private snackBar: MatSnackBar) {}

  /*
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
  }*/


  public createService(){
    const servicio: ServiceResponse = {
      id: 0, // Asigna un valor válido o nulo si lo maneja el backend
      name: 'Servicio de prueba',
      description: 'tralalero tralalala!',
      duration: 10,
      price: 1000,
      status: 'Active'
    };


    this.servicesService.create(null, servicio).subscribe({
      next: (response) => {
        console.log('✅ Servicio creado exitosamente:', response);

      },
      error: (err) => {
        console.error('❌ Error al crear el servicio:', err);

      },
      complete: () => {
        console.log('✔️ Operación completada.');
      }
    });
  }
  public updateService(){

  }

  public deleteService(id: number) {
    this.servicesService.delete(id).subscribe(() => {
      this.services = this.services.filter(s => s.id !== id); // Actualiza la tabla
      this.snackBar.open('🗑️ Servicio eliminado.', 'Cerrar', { duration: 2000 });
    });
  }
}
