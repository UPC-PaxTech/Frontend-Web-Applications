// auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AccountApiService } from '../services/accountApi.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountApiService);
  const router = inject(Router);

  const token = accountService.getToken();

  if (token) {
    return true;
  }

  // Si no hay token, redirige al login
  router.navigate(['/iam/login']);
  return false;
};
