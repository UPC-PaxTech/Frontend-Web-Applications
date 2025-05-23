import { Component } from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [
    MatButton,
    MatFormFieldModule,
    MatInput,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

}
