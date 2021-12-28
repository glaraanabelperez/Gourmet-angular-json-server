import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { LoginModule } from './components/login/login.module';

import { NavComponent } from './components/nav/nav.component';
import { NavAuthComponent } from './components/navAuth/navAuth.component';
import { NavClientComponent } from './components/navClient/navClient.component';
import { MenusModule } from './components/menu/menu.module';
import { ShoppingCarModule } from './components/shoping-cart/shoppingCar.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginModule,
    MenusModule,
    ShoppingCarModule
  ],
  declarations: [
    NavComponent, 
    NavAuthComponent,
    NavClientComponent
  ],
  exports: [
    RouterModule,
    NavComponent,
    NavAuthComponent,
    NavClientComponent,
  ],
  providers: [],

})
export class PublicModule { }
