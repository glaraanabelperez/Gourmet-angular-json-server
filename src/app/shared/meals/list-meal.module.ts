import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMealService } from '../meals/service/meal.service';
import { ListMealsComponent } from './list-meals.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,  
    NgxSpinnerModule,

  ],
  declarations: [
    ListMealsComponent,
  ],
  exports: [
    ListMealsComponent,

  ],
  providers:[
    ListMealService,
  ]
})

export class ListMealModule { }
