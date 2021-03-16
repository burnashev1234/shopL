import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Share/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

 

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
  }

  removeProduct(id: number){
    this.productService.removeProduct(id)
  }

}
