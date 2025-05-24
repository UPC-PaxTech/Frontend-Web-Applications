import { Component } from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import {MatInput} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {AccountApiService} from '../../services/accountApi.service';
import { Router, RouterLink } from '@angular/router';
import {AccountEntity} from '../../model/account.entity';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-login-form',
  imports: [
    MatButton,
    MatFormFieldModule,
    MatInput,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    NgIf,
    TranslatePipe,

  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  loginForm: FormGroup;
  loginError = false;

  constructor(
    private fb: FormBuilder,
    private accountApiService: AccountApiService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const { email, password } = this.loginForm.value;

    this.accountApiService.getAccounts().subscribe((accounts: AccountEntity[]) => {
      const account = accounts.find(
        acc => acc.email === email && acc.passwordHash === password && acc.isActive
      );

      if (account) {
        this.loginError = false;
        if (account.type === 'provider') {
          this.router.navigate(['/provider/homeProvider']);
        } else if (account.type === 'client') {
          this.router.navigate(['/client/homeClient']);
        }
      } else {
        this.loginError = true;
      }
    });
  }
}
