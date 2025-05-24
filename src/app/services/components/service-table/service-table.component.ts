import {Component, inject, Input, OnChanges, SimpleChanges} from '@angular/core';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableModule
} from '@angular/material/table';
import { Service } from '../../model/service.entity';
import { TranslatePipe } from '@ngx-translate/core';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';
import { ServiceApiService } from '../../services/services-api.service';
import { ServiceAssembler } from '../../services/service.assembler';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceResponse } from '../../services/service.response';

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
export class ServiceTableComponent implements OnChanges {
  displayedColumns: string[] = ['name', 'duration', 'price', 'status', 'actions'];
  @Input() services: Service[] = [];
  @Input() newService: ServiceResponse | null = null;


  private servicesService: ServiceApiService = inject(ServiceApiService);

  constructor(private snackBar: MatSnackBar) {}

  ngOnChanges() {
    if (this.newService) {
      this.servicesService.post(this.newService).subscribe({
        next: (response) => {
          const entity = ServiceAssembler.toEntityFromResource(response);
          this.services.push(entity);
          this.snackBar.open('✅ Servicio creado con éxito.', 'Cerrar', { duration: 2000 });
        },
        error: (err) => {
          this.snackBar.open('❌ Error al crear el servicio.', 'Cerrar', { duration: 2000 });
          console.error(err);
        }
      });
    }
  }

  public createService(service: ServiceResponse): void {
    this.servicesService.post(service).subscribe({
      next: (response) => {
        const created = ServiceAssembler.toEntityFromResource(response);
        this.services = [...this.services, created]; // actualiza la lista
        this.snackBar.open('✅ Servicio creado con éxito.', 'Cerrar', { duration: 2000 });
      },
      error: (err) => {
        console.error('❌ Error al crear el servicio:', err);
        this.snackBar.open('❌ Error al crear el servicio.', 'Cerrar', { duration: 2000 });
      }
    });
  }

  public deleteService(id: number): void {
    console.log('Deleting from endpoint:', this.servicesService.resourcePath());
    console.log('🔧 Service API Instance:', this.servicesService);
    console.log('DELETE URL:', `${this.servicesService.resourcePath()}/${id}`);


    this.servicesService.delete(id).subscribe(() => {
      this.services = this.services.filter(s => s.id !== id);
      this.snackBar.open('🗑️ Servicio eliminado.', 'Cerrar', { duration: 2000 });
    });
  }


}
