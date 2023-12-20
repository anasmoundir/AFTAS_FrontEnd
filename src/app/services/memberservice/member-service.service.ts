import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { member } from 'src/app/models/member.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class MemberServiceService {
  private apiUrl = environment.apiUrl +"member";

  constructor(private http : HttpClient) { }

  getMembers(): Observable<member[]> {
    return this.http.get<any>(this.apiUrl + '/All?page=0&size=10&sort=id,asc').pipe(
      map(response => response.content)
    );
  }

deleteMember(id: number): Observable<void> {
  return this.http.delete<void>(this.apiUrl + "/"+id);
}

updateMember(id: number, updatedMember: member): Observable<member> {
  return this.http.put<member>(this.apiUrl + "/" + id, updatedMember);
}
addMember(newMember: member): Observable<member> {
  return this.http.post<member>(this.apiUrl, newMember);
}
getMemberById(id: number): Observable<member> {
  return this.http.get<member>(this.apiUrl + id);
}
}
