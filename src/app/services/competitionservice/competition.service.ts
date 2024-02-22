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

  getCompetitionById(id: number): Observable<competition> {
    return this.http.get<competition>(`${this.apiUrl}/${id}`);
  }

  getAllCompetitions(): Observable<competition[]> {
    return this.http.get<competition[]>(this.apiUrl);
  }

  addCompetition(competition: competition): Observable<competition> {
    return this.http.post<competition>(`${this.apiUrl}competition`, competition);
  }

  updateCompetition(id: number, competition: competition): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, competition);
  }

  deleteCompetition(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


  getOpenCompetitions(page: number, size: number): Observable<competition[]> {
    const url = `${this.apiUrl}competition/open?page=${page}&size=${size}`;
    return this.http.get<any>(url).pipe(map(response =>response.content));
}


getClosedCompetitions(page: number, size: number): Observable<competition[]> {
  const url = `${this.apiUrl}competition/closed?page=${page}&size=${size}`;
  return this.http.get<any>(url).pipe(map(response => response.content));
}

registerForCompetition(memberId: number, competitionId: number): Observable<any> {
  const url = `${this.apiUrl}member/${memberId}/competitions/${competitionId}/register`;
  return this.http.post(url, {});
}
}
