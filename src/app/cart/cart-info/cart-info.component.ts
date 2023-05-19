import { Component,EventEmitter, Output, Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/list/product';
import  data from '../../list/products.json'
import { RowService } from '../../services/row.service';

@Component({
  selector: 'app-cart-info',
  templateUrl: './cart-info.component.html',
  styleUrls: ['./cart-info.component.css']
})
export class CartInfoComponent {
  @Output() productEvent = new EventEmitter<Product>()
  id: number = this.activatedRoute.snapshot.params['id'];
    product:Product = data.filter(x=>x.id==this.id)[0]
  constructor(private activatedRoute: ActivatedRoute, private productService: RowService){
    
    
  }
  
  ngOnInit(){
    
      this.productService.getProduct().subscribe((res)=>{
        console.log(res);
       // console.log(this.productService.productStreamArrr);
       })
      
    }
    
}
