import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrationModel } from 'src/app/models/registration.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  private apiUrl = environment.apiUrl+'auth/register';
  constructor(private http: HttpClient) { }
  register(user: RegistrationModel): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
}
