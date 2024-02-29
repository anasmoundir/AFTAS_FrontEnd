import { CanActivateFn } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import Swal from 'sweetalert2';

export const juryGuard: CanActivateFn = async (route, state) => {
  console.log('jury guard');
  const accessToken = localStorage.getItem('accessToken');
  console.log('accessToken:', accessToken);

  if (!accessToken) {
    Swal.fire({
      icon: 'error',
      title: 'Access Denied!',
      text: 'You are not authenticated to access this page.',
      showConfirmButton: true
    });
    return false;
  }

  const role = await getRoleFromAccessToken(accessToken);
  console.log('role:', role);
  if (role === '[JURY]' || role === 'JURY' || role === 'JURY' || role === 'JURY') {
    return true;
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Access Denied!',
      text: 'You are not authorized to access this page.',
      showConfirmButton: true
    });
    return false;
  }
};

async function getRoleFromAccessToken(accessToken: string): Promise<string> {
  const helper = new JwtHelperService();
  const decodedToken = helper.decodeToken(accessToken);
  return decodedToken.role;
}
