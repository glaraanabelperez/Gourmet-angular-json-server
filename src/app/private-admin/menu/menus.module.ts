import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenusComponent } from './menus.component';
import { MenuListModule } from 'src/app/shared/menu/menu-list.module';
import { DateModule } from 'src/app/shared/date/date.module';
import { ListMealModule } from 'src/app/private-admin/edit-meals/list-meal.module';


const routes: Routes = [
   {path: 'edit-menus', component:MenusComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MenuListModule,
    DateModule,
    ListMealModule
  ],
  declarations: [
    MenusComponent
  ],
  exports: [
  ],
  providers: [],

})
export class EditMenuModule { }
