import { CanActivateFn } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

export const adminGuard: CanActivateFn = async (route, state) => {


  console.log('adminGuard');
const accessToken = localStorage.getItem('accessToken');
console.log('accessToken:', accessToken);

if (!accessToken) {
  return false;
}
const role = await getRoleFromAccessToken(accessToken);

console.log('role:', role);
if (role === '[MANAGER]' || role === 'MANAGER' || role === 'MANAGER' || role === 'manager') {
  return true;
} else {

  return false;
}
};

async function getRoleFromAccessToken(accessToken: string): Promise<string> {
const helper = new JwtHelperService();
const decodedToken = helper.decodeToken(accessToken);
return decodedToken.role;

};



