import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule} from '@angular/forms';
import { DateService } from './service/date.service';
import { DateComponent } from './date.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    NgbModule,
  ],
  declarations: [
    DateComponent
  ],
  exports: [
    DateComponent
  ],
  providers: [DateService],

})
export class DateModule { }
