import { Component } from '@angular/core';
import {RegisterFormClientComponent} from '../../components/register-form-client/register-form-client.component';
import {RegisterFormProviderComponent} from '../../components/register-form-provider/register-form-provider.component';
import {PlanSelectorComponent} from '../../components/plan-selector/plan-selector.component';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import { MatButtonToggleGroup} from '@angular/material/button-toggle';
import {MatButtonToggle} from '@angular/material/button-toggle';
import {LoginFormComponent} from '../../components/login-form/login-form.component';
import {MatButton} from '@angular/material/button';
import {MatToolbar} from '@angular/material/toolbar';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-register-page',
  imports: [
    RegisterFormClientComponent,
    RegisterFormProviderComponent,
    PlanSelectorComponent,
    MatButtonToggleGroup,
    MatButtonToggle,
    FormsModule,
    NgIf,
    LoginFormComponent,
    MatButton,
    MatToolbar,
    RouterLink
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  isProvider: boolean = false;  // Determina si se está registrando un cliente o proveedor
  showPlanSelector: boolean = true; // Determina si mostrar el selector de planes

  // Cambia entre los formularios de cliente y proveedor
  toggleForm(isProvider: boolean): void {
    this.isProvider = isProvider;
    this.showPlanSelector = false; // Reset al cambiar entre formularios
  }

  // Cuando se hace clic en el botón de registro del proveedor, muestra el selector de planes
  completeRegistration(): void {
    this.showPlanSelector = true; // Muestra el selector de planes directamente
  }
}
