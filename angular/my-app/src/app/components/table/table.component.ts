import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  petList = [
    {
      breed: "Schnauzer",
      name: "Hanna",
      age: "15"
    },
    {
      breed: "Mestizo",
      name: "Simón",
      age: "13"
    },
    {
      breed: "Mestizo",
      name: "Tigger",
      age: "11"
    }
  ];

}
