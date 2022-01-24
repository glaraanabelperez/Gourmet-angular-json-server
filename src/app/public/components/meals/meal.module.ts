import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealsComponent } from './meals.component';
import { RouterModule, Routes } from '@angular/router';
import { ListMealModule } from 'src/app/shared/meals/list-meal.module';

const routes: Routes = [
  {path: 'meals', component:MealsComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ListMealModule,

  ],
  declarations: [
    MealsComponent
  ],
  exports: [
  ],
  providers:[
  ]
})

export class MealModule { }
