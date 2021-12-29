import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMealsComponent } from './list-meals/list-meals.component';
import { MealService } from './service/meal.service';
import { MealsComponent } from './meals.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'meals', component:MealsComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),

  ],
  declarations: [
    ListMealsComponent, 
    MealsComponent
  ],
  exports: [
    ListMealsComponent
  ],
  providers:[
    MealService
  ]
})

export class MealModule { }
