import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  //COmunicacion padre a hijo: ejemplo navbar con carrito de compras podemos pasarle del hijo al padre cuantos items tiene ese carrito pero no se utiliza así.
//Declarar una variable que recibe un objeto enviado por el padre
@Input() datoEnviado: any = {};
//Declarar una variable que recibe un string enviado por el padre
@Input() miVariable: String = '';
@Input() miVariable2!: String; //con el ! le digo que se va a inicializar en tiempo de ejecución


//comunicación hijo a padre
@Output() mensaje: EventEmitter<String>; //<Tipo>, puedo poner <any> y recibe cualquier cosa


//Inicializo el evento emitter
constructor () {
  this.mensaje = new EventEmitter();
}

enviarMsj () {
  this.mensaje.emit("Mensaje enviado desde el hijo al padre");
}
}
