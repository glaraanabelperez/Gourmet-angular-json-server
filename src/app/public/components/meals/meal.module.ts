import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    MealsComponent
  ],
  exports: [
  ],
  providers:[
  ]
})

export class MealModule { }
