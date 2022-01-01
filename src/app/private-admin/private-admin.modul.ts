import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { EditMenuModule } from './menu/menus.module';
import { OrdersModule } from './orders/orders.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EditMenuModule,
    OrdersModule
  ],
  declarations: [],
  exports: [],
  providers: [],

})
export class PrivateAdminModul { }
