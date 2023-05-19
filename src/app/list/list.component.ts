import { Component } from '@angular/core';
import  data from './products.json'
import { Product } from './product';




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  products: Product[]= data;
  test: Product = this.products[29];
  ngOnInit() {
    console.log(this.products);

  }
}
