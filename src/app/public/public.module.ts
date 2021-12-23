import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { LoginModule } from './components/login/login.module';

import { NavComponent } from './components/nav/nav.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavAuthComponent } from './components/navAuth/navAuth.component';
import { NavClientComponent } from './components/navClient/navClient.component';


const routes: Routes = [
  {path: 'menu', component:MenuComponent},
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    LoginModule
  ],
  declarations: [
    NavComponent, 
    MenuComponent,
    NavAuthComponent,
    NavClientComponent
  ],
  exports: [
    RouterModule,
    NavComponent,
    NavAuthComponent,
    NavClientComponent
  ],
  providers: [],

})
export class PublicModule { }
