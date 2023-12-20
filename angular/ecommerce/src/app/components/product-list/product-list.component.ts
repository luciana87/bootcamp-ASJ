import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(public service: ProductServiceService) {

  }

  ngOnInit(): void {
    this.getProductList();
  }

  //Obtener productos
  getProductList() {
    this.service.getProducts().subscribe((respuesta: Product[]) => {
      this.service.productList = respuesta;
      console.log(this.service.productList);
    })
  }

  productList(){
    
  }
}
