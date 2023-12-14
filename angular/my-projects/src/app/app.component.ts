import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-projects';

  constructor (private ruta: ActivatedRoute){}

  // parametroURL = this.ruta.snapshot.params['idProducto'];
}
