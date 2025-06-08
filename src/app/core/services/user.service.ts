import { Injectable } from '@angular/core';
import { API_URL } from '../utils/api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '@interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = `${API_URL}/users`;

  constructor(private http: HttpClient) {}

  create(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}`, user);
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getPaginated(page: number = 0, size: number = 10): Observable<any> {
    return this.http.get(`${this.apiUrl}/all?page=${page}&size=${size}`);
  }

  getByCode(code: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/code/${code}`);
  }

  deleteByCode(code: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${code}`);
  }

}