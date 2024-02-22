import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivationService {
  private apiUrl = '/auth/activate';
  constructor(private http : HttpClient) { }
  activateUser(username: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${username}`, {});
  }
}
