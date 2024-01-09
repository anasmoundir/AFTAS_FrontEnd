import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ranking } from 'src/app/models/rankin.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RankingService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPodiumForCompetition(competitionId: number): Observable<ranking[]> {
    const url = `${this.apiUrl}podium/${competitionId}`;
    return this.http.get<ranking[]>(url);
  }
}
