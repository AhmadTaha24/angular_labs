import { Component } from '@angular/core';
import { Product } from '../list/product';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  products: Product[]=[]
  constructor(private counterService: CounterService){}
  maxStock:number=100;
  counter:number =0;
  ngOnInit(){
  this.counterService.getCounter().subscribe((res)=>{
     this.counter=res;
    })
    
  }
  increaseCounter(){
    (this.counter<=this.maxStock)?this.counterService.setCounter(++this.counter):0
  }
  decreaseCounter(){
    (this.counter>0)?this.counterService.setCounter(--this.counter):0
  }
  receiveProduct(newProduct: Product){
    this.products.push(newProduct);
}
}