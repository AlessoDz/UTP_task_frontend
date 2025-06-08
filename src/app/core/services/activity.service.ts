import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from '../interfaces/activity.interface';
import { API_URL } from '../utils/api';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private apiUrl = `${API_URL}/activities`;

  constructor(private http: HttpClient) {}

  // Crear actividad
  createActivity(activity: Activity): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, activity);
  }

  // Obtener todas las actividades
  getAllActivities(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  // Obtener actividad por ID
  getActivityById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Eliminar actividad
  deleteActivity(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  // Asignar estudiante a actividad
  assignStudentToActivity(studentCode: string, activityId: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${activityId}/assign-student/${studentCode}`, {});
  }
}
