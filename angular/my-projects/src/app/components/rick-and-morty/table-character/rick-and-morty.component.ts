import { Component, OnInit } from '@angular/core';
import { RickAndMortyServiceService } from 'src/app/services/rick-and-morty/rick-and-morty-service.service'; //Service importado

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./rick-and-morty.component.css'],
  providers: [RickAndMortyServiceService] //Agrego el servicio
})
export class RickAndMortyComponent implements OnInit{

  characters: any = [];

  constructor(public service: RickAndMortyServiceService) {
    this.service;
  }

  ngOnInit(): void {
    this.characters = this.service.getDataAPI().subscribe((data) =>{ //Como es una llamada asincrónica en vez de utilizar una promesa utilizo suscribe() que captura el evento que viene del servicio
      console.log(data);
      this.characters = data; //me trae toda la data que tiene {info, results}
    });
  }
}
