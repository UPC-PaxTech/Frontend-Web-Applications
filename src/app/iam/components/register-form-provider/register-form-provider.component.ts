import { Component } from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {MatCardTitle} from '@angular/material/card';


@Component({
  selector: 'app-register-form-provider',
  imports: [
    MatCardHeader,
    MatCardTitle,
    MatCard,
    MatCardContent,
    MatFormField,
    MatLabel,
    MatFormField,
    MatFormField,
    MatInput,
    MatCardActions,
    MatButton,
    MatLabel,
    MatFormField
  ],
  templateUrl: './register-form-provider.component.html',
  styleUrl: './register-form-provider.component.css'
})
export class RegisterFormProviderComponent {

}
