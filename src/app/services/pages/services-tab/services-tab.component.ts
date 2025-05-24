import {Component, inject, OnInit} from '@angular/core';
import { Service} from '../../model/service.entity';
import {TranslatePipe} from '@ngx-translate/core';
import {ServiceTableComponent} from '../../components/service-table/service-table.component';
import {ServiceAssembler} from '../../services/service.assembler';
import {ServiceApiService} from '../../services/services-api.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateServiceDialogComponent } from '../../components/service-dialog/service-dialog.component'; // ajusta ruta según estructura
import { ServiceResponse } from '../../services/service.response';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-services-tab',
  imports: [
    TranslatePipe,
    ServiceTableComponent,
    MatButton,

  ],
  templateUrl: './services-tab.component.html',
  styleUrl: './services-tab.component.css'
})
export class ServicesTabComponent implements OnInit{
  service: Service[] = [];
  newService: ServiceResponse | null = null;
  private serviceService = inject(ServiceApiService);
  private dialog: MatDialog = inject(MatDialog);

  ngOnInit() {
    this.serviceService.getAll().subscribe(service => {
      this.service = ServiceAssembler.toEntitiesFromResponse(service);
      this.service = this.service.filter(s => s.status === 'Active');
      this.service = this.service.filter(s => s.salonId === 1);
    })
  }

  openCreateServiceDialog() {
    const dialogRef = this.dialog.open(CreateServiceDialogComponent);

    dialogRef.afterClosed().subscribe((result: ServiceResponse | undefined) => {
      if (result) {
        this.newService = result;
      }
    });
  }


}
