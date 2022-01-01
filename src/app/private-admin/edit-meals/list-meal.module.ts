import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMealsComponent } from '../edit-meals/list-meals.component';
import { ListMealService } from '../edit-meals/service/meal.service';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ListMealsComponent
  ],
  exports: [
    ListMealsComponent
  ],
  providers:[
    ListMealService
  ]
})

export class ListMealModule { }
