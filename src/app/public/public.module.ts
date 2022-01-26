import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { LoginModule } from './components/login/login.module';

import { NavComponent } from './components/navs/nav/nav.component';
import { NavAuthComponent } from './components/navs/navAuth/navAuth.component';
import { NavClientComponent } from './components/navs/navClient/navClient.component';
import { OrderFoodModule } from './components/order-food/order-food.module';
import { MealModule } from './components/meals/meal.module';
import { ShoppingCarModule } from './components/shoping-cart/shoppingCar.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginModule,
    OrderFoodModule,
    MealModule,
    ShoppingCarModule
  ],
  declarations: [
    NavComponent, 
    NavAuthComponent,
    NavClientComponent,
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
