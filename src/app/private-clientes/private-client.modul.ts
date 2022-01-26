import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { OrdersClientComponent } from './orders/orders-client.component';
import { OrdersClientService } from './orders/service/orders-client.service';
import { ConfirmOrder } from './shopping-confirm-order/confirm-order.component';


const routes: Routes = [
  {path: 'orders-client', component:OrdersClientComponent},
  {path: 'finish-order', component:ConfirmOrder},

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
    OrdersClientComponent,
    ConfirmOrder
  ],
  exports: [],
  providers: [OrdersClientService],

})
export class PrivateClientModul { }
