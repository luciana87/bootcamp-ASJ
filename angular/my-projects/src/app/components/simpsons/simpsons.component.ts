import { Component } from '@angular/core';

@Component({
  selector: 'app-simpsons',
  templateUrl: './simpsons.component.html',
  styleUrls: ['./simpsons.component.css']
})
export class SimpsonsComponent {
  
//Creo el arreglo
  characterList: {name: String, ocupacion: String, img: String} [] = [];
  
//Mis variables
  nameInput = '';
  ocupacionInput = '';
  imgInput = '';

  //----------------------Funciones-----------------------

  addCharacter (nameInputValue: String, ocupacionInputValue: String, imgInputValue: String) {
    let character: {name: String, ocupacion: String, img: String} = {
      name: nameInputValue, ocupacion: ocupacionInputValue, img: imgInputValue
    };

    this.characterList.push(character);
  }
}
