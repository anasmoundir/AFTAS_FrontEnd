import { CanActivateFn } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import Swal from 'sweetalert2';


export const adminGuard: CanActivateFn = async (route, state) => {

  console.log('adminGuard');
  const accessToken = localStorage.getItem('accessToken');
  console.log('accessToken:', accessToken);

  if (!accessToken) {
    Swal.fire({
      icon: 'error',
      title: 'Access Denied',
      text: 'You are not logged in. Please login to access this page.',
      confirmButtonText: 'OK'
    });
    return false;
  }
  const role = await getRoleFromAccessToken(accessToken);
  console.log('role:', role);
  if (role === '[MANAGER]' || role === 'MANAGER' || role === 'MANAGER' || role === 'manager') {
    return true;
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Access Denied',
      text: 'You do not have permission to access this page.',
      confirmButtonText: 'OK'
    });
    return false;
  }
};

async function getRoleFromAccessToken(accessToken: string): Promise<string> {
  const helper = new JwtHelperService();
  const decodedToken = helper.decodeToken(accessToken);
  return decodedToken.role;
};



