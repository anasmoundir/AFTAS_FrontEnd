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
  searchMembersByName(name: string): Observable<member[]> {
    const url = `${this.apiUrl}/members/searchByName?name=${name}`;
    return this.http.get<member[]>(url);
  }

  searchMembersByFamilyname(familyname: string): Observable<member[]> {
    const url = `${this.apiUrl}/members/searchByFamilyname?familyname=${familyname}`;
    return this.http.get<member[]>(url);
  }

  searchMembersByNum(num: number): Observable<member[]> {
    const url = `${this.apiUrl}/members/searchByNum?num=${num}`;
    return this.http.get<member[]>(url);
  }

  addMember(memberData: any): Observable<member> {
    const url = `${this.apiUrl}`;
    return this.http.post<member>(url, memberData);
  }

deleteMember(id: number): Observable<void> {
  return this.http.delete<void>(this.apiUrl + "/"+id);
}
updateMember(id: number, updatedMember: member): Observable<member> {
  return this.http.put<member>(this.apiUrl + "/" + id, updatedMember);
}
getMemberById(id: number): Observable<member> {
  return this.http.get<member>(this.apiUrl + id);
}
}
