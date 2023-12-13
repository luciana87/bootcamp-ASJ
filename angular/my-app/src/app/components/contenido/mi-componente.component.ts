import { Component } from '@angular/core';

@Component({
  selector: 'mi-componente', //Etiqueta personalizada
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})

export class MiComponenteComponent {

  texto = "Este es un componente secundario";
  titulo = "Esto es el título";
  num: number = 0;
  flag = false;
  compras = ["Fruta","Carne","Bebidas","Palta","Helado","Pescado"];

  persona = {
    nombre: "Luciana",
    apellido: "Chaparro",
    edad: 36
  }


  generarAleatorio (){
    this.num = Math.floor(Math.random() *10);
  }
  decrementarNum(){
    this.num--;
  }
  incrementarNum () {
    this.num++;
  }
}
