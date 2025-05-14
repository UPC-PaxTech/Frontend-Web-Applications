import { Component } from '@angular/core';
import {MatDialog, MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import {ServiceResponse} from '../../services/service.response';
import { Service } from "../../model/service.entity";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-create-service-dialog',
  templateUrl: './service-dialog.component.html',
  imports: [
    MatDialogContent,

    FormsModule,
    MatLabel,
    MatFormField,
    MatOption,
    MatSelect,
    MatButton,
    MatDialogActions,
    MatDialogTitle,
    MatOption,
    MatSelect,
    MatDialogActions
  ]
})
export class CreateServiceDialogComponent {

  service: ServiceResponse = {
    id: 0,
    name: '',
    description: '',
    duration: 0,
    price: 0,
    status: 'Active'
  };

  constructor(public dialogRef: MatDialogRef<CreateServiceDialogComponent>) {}

  submit() {
    this.dialogRef.close(this.service);
  }

  cancel() {
    this.dialogRef.close();
  }
}
