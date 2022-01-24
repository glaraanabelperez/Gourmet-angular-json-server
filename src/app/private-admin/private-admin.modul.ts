import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MealsAdminComponent } from './meals/meals-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { DateModule } from '../shared/date/date.module';
import { MenuListModule } from '../shared/menu/menu-list.module';
import { MenusComponent } from './menu/menus.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdersService } from './orders/service/orders.service';
import { ListMealModule } from '../shared/meals/list-meal.module';
import { MealsForm } from './meals/meals-form/meals-form.component';

const routes: Routes = [
  {path: 'edit-meals', component:MealsAdminComponent},
  {path: 'edit-menus', component:MenusComponent},
  {path: 'orders', component:OrdersComponent},

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
    ListMealModule,
  ],

  declarations: [
    MenusComponent,
    MealsAdminComponent,
    MealsForm,
    OrdersComponent
  ],
  exports: [],
  providers: [OrdersService],

})
export class PrivateAdminModul { }
