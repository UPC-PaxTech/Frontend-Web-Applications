import { Component } from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import {ServiceResponse} from '../../services/service.response';
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatOption} from '@angular/material/autocomplete';
import {MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-create-service-dialog',
  templateUrl: './service-dialog.component.html',
  imports: [
    MatDialogContent,
    FormsModule,
    MatLabel,
    MatFormField,
    MatButton,
    MatDialogActions,
    MatDialogTitle,
    MatDialogActions,
    MatOption,
    MatSelect,
    MatInput
  ]
})
export class CreateServiceDialogComponent {

  service: ServiceResponse = {
    id: 0,
    name: '',
    description: '',
    duration: 0,
    price: 0,
    status: 'Active',
    salonId: 1 // o algún valor por defecto adecuado
  };


  constructor(public dialogRef: MatDialogRef<CreateServiceDialogComponent>) {}

  submit() {
    this.dialogRef.close(this.service);
  }

  cancel() {
    this.dialogRef.close();
  }
}
