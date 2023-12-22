import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
nombre ='Luciana';
nombre2 = 'LUciaNa'
total = 34.35;
total2 = 34.35;
fecha = new Date;
objeto = {
  nombre: "Luciana",
  apellido: "Chaparro",
  edad: 36
}
array = ["Luciana", "Natalin", "Simón","Mateo","Emiliano"];
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
