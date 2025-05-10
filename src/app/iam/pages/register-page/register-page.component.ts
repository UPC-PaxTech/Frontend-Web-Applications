import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {RouterLink} from '@angular/router';
import {RegisterFormClientComponent} from '../../components/register-form-client/register-form-client.component';
import {RegisterFormProviderComponent} from '../../components/register-form-provider/register-form-provider.component';

@Component({
  selector: 'app-register-page',
  imports: [
    RegisterFormClientComponent,
    RegisterFormProviderComponent
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

}
