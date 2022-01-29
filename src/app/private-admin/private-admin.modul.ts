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
import { ViewOrdersAdminComponent } from './view-orders/view-orders-admin.component';
import { ListMealModule } from '../shared/meals/list-meal.module';
import { MealsForm } from './meals/meals-form/meals-form.component';
import { OrdersSharedModule } from '../shared/orders/orders-shared.module';
import { CustomersComponent } from './customers/customers.component';
import { CustomersService } from './customers/service/customers.service';
import { GuardsAdmin } from '../guards/guards-admin.guard';

const routes: Routes = [
  {path: 'edit-meals', component:MealsAdminComponent, canActivate:[GuardsAdmin]},
  {path: 'edit-menus', component:MenusComponent, canActivate:[GuardsAdmin]},
  {path: 'orders', component:ViewOrdersAdminComponent, canActivate:[GuardsAdmin]},
  {path: 'clientes', component:CustomersComponent, canActivate:[GuardsAdmin]},

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
    ViewOrdersAdminComponent,
    CustomersComponent
  ],
  exports: [],
  providers: [CustomersService],

})
export class PrivateAdminModul { }
