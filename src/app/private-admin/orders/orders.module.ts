import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrdersComponent } from './orders.component';
import { OrdersService } from './service/orders.service';



const routes: Routes = [
   {path: 'orders', component:OrdersComponent},
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
    OrdersComponent
  ],
  exports: [
  ],
  providers: [OrdersService],

})
export class OrdersModule { }
