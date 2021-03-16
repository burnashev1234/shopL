import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Product } from '../app.component';
import { ProductService } from '../Share/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  title: string = ''
  cost: number = null
  description: string = ''

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
  }



  addProduct(){
    const prod: Product = {
      title: this.title,
      id: Date.now(),
      cost: this.cost,
      descrition: this.description
    }

    if(this.title !== '' && this.cost !== null && this.description !== ''){
      this.productService.addProduct(prod)
      this.title = ''
      this.cost = null
      this.description = ''
      console.log('Привет от JavaScript!');
    }
    else {
      console.log(this.cost, this.description, this.title)
      alert("Заполните все поля")
    }
    
    
  }

}
