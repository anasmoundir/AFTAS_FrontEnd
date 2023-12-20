import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { competition } from 'src/app/models/competition.model';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getOpenCompetitions(page: number, size: number): Observable<competition[]> {
    const url = `${this.apiUrl}competition/open?page=${page}&size=${size}`;
    return this.http.get<any>(url).pipe(map(response =>response.content));
}

getClosedCompetitions(page: number, size: number): Observable<competition[]> {
  const url = `${this.apiUrl}competition/closed?page=${page}&size=${size}`;
  return this.http.get<any>(url).pipe(map(response => response.content));
}
}
