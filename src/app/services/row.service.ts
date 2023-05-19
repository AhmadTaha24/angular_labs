import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../list/product';

@Injectable({
  providedIn: 'root'
})
export class RowService {
  productStreamArrr !:Product[];
  product!: Product;
  private productStream = new BehaviorSubject([]);
  

  constructor() { }
  getProduct(){
    return this.productStream.asObservable();
  }
  setProduct(newVal: Product){
   // this.productStreamArrr.push(newVal)
   this.productStream.asObservable().subscribe()
    this.productStream.next(this.productStream.value);
    
  }
}
