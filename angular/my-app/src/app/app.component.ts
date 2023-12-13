import { Component } from '@angular/core';
//import {MiComponenteComponent} from "./components/mi-componente/mi-componente.component"

@Component({ //objeto
  selector: 'app-root', //nombre
  templateUrl: './app.component.html', //html o template
  styleUrls: ['./app.component.css'], //hoja de estilo, css
 // imports: [MiComponenteComponent]
})
export class AppComponent {
  title = 'my-app';
  usuario = 'Luciana Chaparro';
}
