import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {MatButtonToggle} from '@angular/material/button-toggle';
import {MatButtonToggleGroup} from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import {MatCheckbox} from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {TranslatePipe} from "@ngx-translate/core";


@Component({
  selector: 'app-register-form-provider',
    imports: [
        FormsModule,
        MatFormField,
        MatLabel,
        MatFormField,
        MatFormField,
        MatInput,
        MatButton,
        MatLabel,
        MatFormField,
        RouterLink,
        MatButtonToggle,
        MatButtonToggleGroup,
        MatCheckbox,
        TranslatePipe,
    ],
  templateUrl: './register-form-provider.component.html',
  styleUrl: './register-form-provider.component.css'
})
export class RegisterFormProviderComponent {
  @Input() isProvider: boolean = false;
  @Output() toggleChange = new EventEmitter<boolean>();
  constructor(private snackBar: MatSnackBar, private router: Router) {}

  onRegister() {
    // Aquí podrías hacer lógica de validación o enviar datos a tu API

    // Mostrar mensaje
    this.snackBar.open('Account created successfully!', 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });

    // Redirigir después de un pequeño retraso
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1500);
  }


}
