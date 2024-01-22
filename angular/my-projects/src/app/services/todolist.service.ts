import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  private apiUrl = 'http://localhost:8080/tareas'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) { }

  getAllTareas(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  getTareaById(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}/${id}`);
  }

  saveTarea(tarea: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, tarea);
  }

  updateTarea(id: number, tarea: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${id}`, tarea);
  }

  deleteTarea(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
