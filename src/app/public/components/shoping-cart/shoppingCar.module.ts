import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { DateModule } from '../date/date.module';
import { ShoppingCarService } from './service/shoppingCar.service';
import { ShoppingCar } from './shoppingCar.component';



const routes: Routes = [
  {path: 'shopping', component:ShoppingCar},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    ShoppingCar
  ],
  exports: [
    // RouterModule,
  ],
  providers: [ShoppingCarService],

})
export class ShoppingCarModule { }
