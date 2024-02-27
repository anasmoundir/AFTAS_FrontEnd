import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Observable, throwError, catchError } from 'rxjs';
import { RegistrationModel } from 'src/app/models/registration.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = environment.apiUrl + 'auth/register';

  constructor(private http: HttpClient, private router: Router) {}

  register(user: RegistrationModel): Observable<any> {
    return this.http.post(this.apiUrl, user).pipe(
      catchError(this.handleError.bind(this))
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 400) {
      const errorMessage = error.error.username ? 'Username already exists!' : 'Email already exists!';
      return throwError(errorMessage);
    } else if (error.status === 200) {
      console.error('Successful registration but received status 200.');
      const navigationExtras: NavigationExtras = {
        queryParams: { successMessage: 'Registration successful! Please log in to continue.' }
      };
      this.router.navigate(['/login'], navigationExtras);
      return throwError('Redirecting to login...');
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
      return throwError('Something bad happened; please try again later.');
    }
  }
  isAuthenticated(): boolean {
    return !!localStorage.getItem('accessToken');
  }
}
