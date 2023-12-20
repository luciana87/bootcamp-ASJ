import { Component, OnInit } from '@angular/core';
import { MiServicioService } from './services/mi-servicio.service';//Service importado


@Component({ //objeto
  selector: 'app-root', //nombre
  templateUrl: './app.component.html', //html o template
  styleUrls: ['./app.component.css'], //hoja de estilo, css
 providers: [MiServicioService] //Importo el servicio para poder usarlo en este componente sino en app.module para que sea global y lo pueda usar cualquier componente

})
export class AppComponent  implements OnInit {
  title = 'my-app';
  usuario = 'Luciana Chaparro';

  //Creo el arreglo al que le voy a asignar el arreglo obtenido desde el servicio
datos: any = [];
personajes: any = [];

  constructor(public miServicio: MiServicioService){ //Inyecta mi servicio con 'public miServicio: MiServicioService(type)' para poder utilizarlo
  //Quiero apuntar a mi servicio
  this.miServicio; //Cuando ejecuto ng s -o, se renderiza el constructor y me muestra el msj del servicio en consola. También lo puedo poner en el ng Oninit

  }

  ngOnInit(): void {  //Se ejecuta una vez que termina de renderizar el constructor, método para utilizar datos de mi servicio
    //Llamamos al método "getDatos()" del serivcio:
    this.datos = this.miServicio.getDatos();

    //Llamamos al método getDataAPI() del servicio:
    this.personajes = this.miServicio.getDataAPI().subscribe((data) =>{ //Como es una llamada asincrónica en vez de utilizar una promesa utilizo suscribe()
      console.log(data);
      this.personajes = data; //me trae toda la data que tiene {info, results}
    }); 
  }
}
