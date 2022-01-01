import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrdersClientComponent } from './orders-client.component';
import { OrdersClientService } from './service/orders-client.service';



const routes: Routes = [
   {path: 'orders-client', component:OrdersClientComponent},
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
    OrdersClientComponent
  ],
  exports: [
  ],
  providers: [OrdersClientService],

})
export class OrdersModule { }
