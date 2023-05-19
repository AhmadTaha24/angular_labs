import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../list/product';
import  data from '../list/products.json'


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  constructor(private activatedRoute: ActivatedRoute){
   
  }
  ngOnInit(){
      console.log(this.activatedRoute.snapshot.params['id']);
      //console.log(data[0].id);
      //console.log(data.filter(x=>x.id==this.activatedRoute.snapshot.params['id']));
    }
  id: number = this.activatedRoute.snapshot.params['id'];
  product: Product=data.filter(x=>x.id==this.id)[0]
}
