import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { MenuListComponent } from './menu-list.component';
import { MenuService } from './service/menus.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    MenuListComponent
  ],
  exports: [
    MenuListComponent
  ],
  providers: [MenuService],

})
export class MenuListModule { }
