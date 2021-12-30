import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { OrderFoodComponent } from './order-food.component';
import { MenuListModule } from 'src/app/shared/menu/menu-list.module';
import { DateModule } from 'src/app/shared/date/date.module';



const routes: Routes = [
   {path: 'order-food', component:OrderFoodComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MenuListModule,
    DateModule
  ],
  declarations: [
    OrderFoodComponent,
  ],
  exports: [
    OrderFoodComponent,
  ],
  providers: [],

})
export class OrderFoodModule { }
