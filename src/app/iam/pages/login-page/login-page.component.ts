import { Component } from '@angular/core';
import {LoginFormComponent} from '../../components/login-form/login-form.component';
import {MatToolbar} from '@angular/material/toolbar';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-login-page',
  imports: [
    LoginFormComponent,
    MatToolbar,
    MatButton
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
