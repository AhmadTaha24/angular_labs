import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartInfoComponent } from './cart/cart-info/cart-info.component';
import { CartComponent } from './cart/cart.component';
import { InfoComponent } from './info/info.component';
import { ListComponent } from './list/list.component';
import { LogRegComponent } from './log-reg/log-reg.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: "", component: ListComponent},
  {path:"auth", component: LogRegComponent},
  {path:"info/:id", component:InfoComponent},
  {path:"cart", component: CartComponent},
  {path:"iteminfo/:id", component:CartInfoComponent},
  {path:"**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
