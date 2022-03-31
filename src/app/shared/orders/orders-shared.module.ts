import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { OrdersSharedComponent } from './orders-shared.component';
import { OrdersSharedService } from './service/orders.service';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({

  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    OrdersSharedComponent
  ],
  exports: [
    OrdersSharedComponent
  ],
  providers: [OrdersSharedService],



})
export class OrdersSharedModule { }
