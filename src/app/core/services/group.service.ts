import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group } from '../interfaces/group.interface';
import { API_URL } from '../utils/api';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private apiUrl = `${API_URL}/groups`;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  createGroup(group: Group, photo?: File): Observable<any> {
    const formData = new FormData();
    formData.append('groupDTO', JSON.stringify(group));  // Convertimos el objeto a JSON
    if (photo) {
      formData.append('photo', photo, photo.name);  // Si hay una foto, la añadimos
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`  // Enviar el token JWT en los encabezados
    });

    return this.http.post<any>(`${this.apiUrl}`, formData, { headers: headers });
  }

  getAllGroups(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  getGroupById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  deleteGroup(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  addMemberToGroup(groupId: string, memberCode: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${groupId}/assign-member/${memberCode}`, {});
  }

  getGroupsByUserCode(userCode: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user/${userCode}/groups`);
  }

  removeMemberFromGroup(groupId: string, memberCode: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${groupId}/remove-member/${memberCode}`, {});
  }
}
