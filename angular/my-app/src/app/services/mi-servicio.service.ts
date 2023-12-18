import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  constructor(private http: HttpClient) {
    console.log('Servicio funcionando');

  }

  getDatos() {
    let data = [
      { nombre: "Tarea 1", terminada: true },
      { nombre: "Tarea 2", terminada: true },
      { nombre: "Tarea 3", terminada: false },
      { nombre: "Tarea 4", terminada: true },
    ];
    return data;
  }

  public getDataAPI(){
    return this.http.get('https://rickandmortyapi.com/api/character/?page=1')
  }

  public getPersonajeAPI(id: number) {

    return this.http.get('https://rickandmortyapi.com/id')
  }
}
