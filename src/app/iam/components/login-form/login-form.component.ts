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
import {MatSnackBar} from '@angular/material/snack-bar';

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
    private router: Router,
    private snackBar: MatSnackBar,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const {email, password} = this.loginForm.value;

    this.accountApiService.signIn({email, password}).subscribe({
      next: (user) => {
        this.accountApiService.saveToken(user.token);

        const userId = user.id;

        // Consultar si es provider o client
        this.accountApiService.isProvider(userId).subscribe(isProv => {
          if (isProv) {
            this.router.navigate(['/provider/homeProvider']);
          } else {
            this.accountApiService.isClient(userId).subscribe(isCli => {
              if (isCli) {
                this.router.navigate(['/client/homeClient']);
              } else {
                this.snackBar.open('User is not linked to a role', 'Close', {duration: 3000});
              }
            });
          }
        });
      },
      error: () => {
        this.loginError = true;
      }
    });
  }
}
