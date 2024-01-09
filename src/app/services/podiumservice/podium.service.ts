import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { competition } from 'src/app/models/competition.model';
import { member } from 'src/app/models/member.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PodiumService {

  private apiurl =environment.apiUrl;

  constructor(private http : HttpClient) { }

  getCompetitionsFor(page: number, size: number): Observable<competition[]> {
    const url = `${this.apiurl}competition?page=${page}&size=${size}`;
    return this.http.get<any>(url).pipe(map(response =>response.content));
}
getMemberDetails(memberId: number): Observable<member> {
  const url = `${this.apiurl}member/${memberId}`;
  return this.http.get<member>(url);
}

}
