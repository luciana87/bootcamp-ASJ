import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  valor_input = ''; //propiedad que voy a vincular con el input
  colores: String[] = ["Rojo","Azul","Verde"];
  // colores = [];

  agregar(){
    this.colores.push(this.valor_input);
    this.valor_input = '';
  }


}
