import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login-components/login.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './list-menu/menu.component';


const routes: Routes = [
  {path: 'menu', component:MenuComponent},
  {path: 'login', component:LoginComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [LoginComponent, NavComponent, MenuComponent],
  exports: [
    RouterModule,
    NavComponent
  ],
  providers: [],

})
export class PublicModule { }
