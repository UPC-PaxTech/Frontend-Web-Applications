import { Component } from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatCardTitle} from '@angular/material/card';

@Component({
  selector: 'app-login-form',
  imports: [
    MatCardActions,
    MatCardHeader,
    MatCard,
    MatCardContent,
    MatButton,
    MatFormFieldModule,
    MatInput,
    MatCardTitle
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

}
