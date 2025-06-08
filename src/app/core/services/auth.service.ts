import { Injectable } from '@angular/core';
import { API_URL } from '../utils/api';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AuthResponse } from '@interfaces/auth-response.interface';
import { AuthRequest } from '@interfaces/auth-request.interface';
import { User } from '@interfaces/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${API_URL}/auth`;
  private userSubject = new BehaviorSubject<User | null>(null);

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(request: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, request).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
      })
    );
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/current-user`).pipe(
      tap(user => this.userSubject.next(user))
    );
  }

  getUser(): Observable<User | null> {
    return this.userSubject.asObservable();
  }

  logout(): void {
    localStorage.removeItem('token');
    this.userSubject.next(null);
    this.router.navigate(['/']);
  }

  getToken(): string | null {
    const token = localStorage.getItem('token');
    console.log('Token recuperado desde el localStorage:', token);  // Verificar si el token está en el localStorage
    return token;
  }


  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  initUserFromToken(): void {
    const token = this.getToken();
    if (token) {
      this.getCurrentUser().subscribe({
        next: user => this.userSubject.next(user),
        error: () => this.logout()
      });
    }
  }

}