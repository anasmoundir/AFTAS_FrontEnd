import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/User.model';
@Injectable({
  providedIn: 'root'
})
export class ActivationService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  activateUser(username: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}auth/activate`, { username });
  }

  getDeactivatedUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}auth/deactivated`);
  }
}
