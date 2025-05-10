import { Component } from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {MatCardTitle} from '@angular/material/card';

@Component({
  selector: 'app-register-form-client',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatLabel,
    MatFormField,
    MatInput,
    MatLabel,
    MatFormField,
    MatCardActions,
    MatButton,
    MatCardTitle
  ],
  templateUrl: './register-form-client.component.html',
  styleUrl: './register-form-client.component.css'
})
export class RegisterFormClientComponent {

}
