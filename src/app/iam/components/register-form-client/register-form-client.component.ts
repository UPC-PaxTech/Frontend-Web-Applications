import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {MatCheckbox} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {MatButtonToggleGroup} from '@angular/material/button-toggle';
import {MatButtonToggle} from '@angular/material/button-toggle';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form-client',
  imports: [
    MatLabel,
    MatFormField,
    MatInput,
    MatLabel,
    MatFormField,
    MatButton,
    RouterLink,
    MatCheckbox,
    FormsModule,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatButtonToggle
  ],
  templateUrl: './register-form-client.component.html',
  styleUrl: './register-form-client.component.css'
})
export class RegisterFormClientComponent {
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
