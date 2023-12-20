import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  URL_API = 'https://reqres.in/api/users';

  dataUser: any = {
    id: -1, //con el ? el id puede estar o no. 
    name: '',
    job: ''
  }

  // getUsers(){
  //   return this.http.get(this.URL_API); //Muestra un observable por consola.
  // }

  /* Un observable funciona como una promesa, es asincrónico, 
  pero te garantiza (que te va a dar la información lo más actualizada posible.) 
  que si lo que viene de la db cambió, 
  el observable avisa a quienes estén suscriptos que esa información cambió. 
  Hay dos tipos de observables. */


  //GET usuarios:
  public getUsers2(): Observable<any> {
    console.log("HTTP GET");
    return this.http.get(this.URL_API);
  }

  //POST user
  public createUser(user: any): Observable<any> {
    console.log("HTTP POST");
    return this.http.post(this.URL_API, user); //Le envío la request

  }

  //DELETE user
  public deleteUser(id: any): Observable<any> {
    return this.http.delete(this.URL_API + "/" + id);//https://reqres.in/api/users/{id}
  }

  //UPDATE user
  public updateUser(id: any): Observable<any>{
    return this.http.put(this.URL_API + '/' + this.dataUser.id /*puedo hacer 'user.id'*/, user); //Le envío por parámetro

  }
}
