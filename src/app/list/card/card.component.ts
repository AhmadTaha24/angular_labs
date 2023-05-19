import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() product!: Product ;

  constructor(private router: Router){

  }
  redirectToDetails(){

    console.log(this.product.description);
    this.router.navigate(["info",this.product.id] )
  }

  redirectToCart(){
    this.router.navigate(["iteminfo",this.product.id] )
  }
}
