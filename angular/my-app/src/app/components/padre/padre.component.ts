import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  title = "Esto es un título que está en el padre"


//Creo una propiedad, una variable en el padre
  msjContenido!: String;

  //Creo un evento
  recibirMsj(msj: String) {
    this.msjContenido = msj;
  }


  //------------------------------------------------------------------
  
  contenidoInput = '';
  mostrar(value: string){
    this.contenidoInput = value;
  }
}
