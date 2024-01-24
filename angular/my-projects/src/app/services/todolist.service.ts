import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/Task';


@Injectable({
  providedIn: 'root'
})
export class TodolistService {


  constructor(private http: HttpClient) {
    console.log('Servicio funcionando');

  }

  // public getAllTareas(): Observable<Task>{
  //   return this.http.get<Task>('http://localhost:8080/tareas')
  // }

  // public getAllTareas(): Observable<Task[]> {
  //   return this.http.get<Task[]>('http://localhost:8080/tareas', { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  // }

  public getAllTareas(): Observable<Task[]> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<Task[]>('http://localhost:8080/tareas',{headers});
  }
  public getTareaById(id: number){
    return this.http.get('http://localhost:8080/tareas/'+id)
  }

  public createTarea(body: any): Observable<Object>{
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post('http://localhost:8080/tareas/crear', body, {headers})
  }

  public updateTarea(id: number, body: any){
    return this.http.put('http://localhost:8080/tareas/'+id, body)
  }

  public deleteTarea(id: number): Observable<Object>{
    return this.http.delete('http://localhost:8080/tareas/'+id)
  }
}
