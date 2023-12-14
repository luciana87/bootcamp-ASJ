import { Component } from '@angular/core';

@Component({
  selector: 'app-simpsons',
  templateUrl: './simpsons.component.html',
  styleUrls: ['./simpsons.component.css']
})
export class SimpsonsComponent {

  characterList: {name: String, ocupacion: String, img: String} [] = [];
  

  nameInput = '';
  ocupacionInput = '';
  imgInput = '';

  addCharacter (nameInputValue: String, ocupacionInputValue: String, imgInputValue: String) {
    let character: {name: String, ocupacion: String, img: String} = {
      name: nameInputValue, ocupacion: ocupacionInputValue, img: imgInputValue
    };
    
    this.characterList.push(character);

    this.nameInput = '';
    this.ocupacionInput = '';
    this.imgInput = '';
  }
}
