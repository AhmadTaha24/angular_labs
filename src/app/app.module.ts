import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './list/list.component';
import { CardComponent } from './list/card/card.component';
import {MatButtonModule} from '@angular/material/button';
import { EgpPipe } from './egp.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { LogRegComponent } from './log-reg/log-reg.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InfoComponent } from './info/info.component';
import { CartComponent } from './cart/cart.component';
import { RegesterComponent } from './log-reg/regester/regester.component';
import { LoginComponent } from './log-reg/login/login.component';
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { CartInfoComponent } from './cart/cart-info/cart-info.component';




@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CardComponent,
    EgpPipe,
    NavbarComponent,
    LogRegComponent,
    NotFoundComponent,
    InfoComponent,
    CartComponent,
    RegesterComponent,
    LoginComponent,
    CartInfoComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
