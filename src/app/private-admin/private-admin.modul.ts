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
import { OrdersAdminComponent } from './orders/orders-admin.component';
import { ListMealModule } from '../shared/meals/list-meal.module';
import { MealsForm } from './meals/meals-form/meals-form.component';
import { OrdersSharedModule } from '../shared/orders/orders-shared.module';
import { CustomersComponent } from './customers/customers.component';
import { CustomersService } from './customers/service/customers.service';

const routes: Routes = [
  {path: 'edit-meals', component:MealsAdminComponent},
  {path: 'edit-menus', component:MenusComponent},
  {path: 'orders', component:OrdersAdminComponent},
  {path: 'clientes', component:CustomersComponent},

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
    OrdersSharedModule
  ],

  declarations: [
    MenusComponent,
    MealsAdminComponent,
    MealsForm,
    OrdersAdminComponent,
    CustomersComponent
  ],
  exports: [],
  providers: [CustomersService],

})
export class PrivateAdminModul { }
