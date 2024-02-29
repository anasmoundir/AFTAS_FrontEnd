import { CanActivateFn, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../app/services/loginservice/login.service';
import { inject } from '@angular/core';



export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);

  const isAuthenticated = loginService.isAuthenticated();

  return isAuthenticated ? true : (
    () => {
      Swal.fire({
        icon: 'error',
        title: 'Access Denied!',
        text: 'You are not authenticated to access this page.',
        showConfirmButton: true
      });
      return false;
    }
  )();
};
