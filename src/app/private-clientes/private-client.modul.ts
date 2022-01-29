import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ViewOrdersClientComponent } from './view-orders/view-orders-client.component';
import { ConfirmOrder } from './shopping-confirm-order/confirm-order.component';
import { GuardsClient } from '../guards/guards-client.guard';
import { DateModule } from '../shared/date/date.module';
import { OrdersSharedModule } from '../shared/orders/orders-shared.module';


const routes: Routes = [
  {path: 'orders-client', component:ViewOrdersClientComponent},
  {path: 'confirmar-orden', component:ConfirmOrder, canActivate:[GuardsClient]},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DateModule,
    OrdersSharedModule
  ],

  declarations: [
    ViewOrdersClientComponent,
    ConfirmOrder
  ],
  exports: [],
  providers: [],

})
export class PrivateClientModul { }
