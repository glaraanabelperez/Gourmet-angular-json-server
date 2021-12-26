import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { MenuService } from './service/menus.service';
import { MenuComponent } from './menu.component';
import { DateModule } from '../date/date.module';



const routes: Routes = [
   {path: 'menu', component:MenuComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DateModule,

  ],
  declarations: [
    MenuComponent
  ],
  exports: [
    // RouterModule,
  ],
  providers: [MenuService],

})
export class MenusModule { }
