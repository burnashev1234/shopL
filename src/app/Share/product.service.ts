import { Injectable } from "@angular/core";

export interface Product {
    id: number
    title: string
    cost: number
    descrition: string
  }

@Injectable({providedIn: 'root'})
export class ProductService {
    public product: Product[] = JSON.parse(localStorage.getItem('myStorage'));

    public productInit(){
        if(localStorage.getItem('myStorage') == null){
            this.product = [];
        }
    }

    removeProduct(id: number){
        this.productInit()
        this.product = this.product.filter(t => t.id !==id)    
        localStorage.setItem('myStorage', JSON.stringify(this.product))
        }

    addProduct(prod: Product){
        this.productInit()
        this.product.push(prod)
        localStorage.setItem('myStorage', JSON.stringify(this.product)) 
    }
}

