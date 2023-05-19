import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { RowService } from '../../services/row.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() product!: Product ;
  productStreamArr:Product[] = [];

  constructor(private router: Router, private productStream: RowService){
   
  }
  ngOnInit(){
    this.productStream.getProduct().subscribe((res)=>{
      this.productStreamArr =res
     })
  }
  redirectToDetails(){

    this.router.navigate(["info",this.product.id] )
  }

  redirectToCart(){
    this.router.navigate(["iteminfo",this.product.id] )
  }

  increaseProduct(){
    this.productStream.setProduct(this.product)
  }
}
