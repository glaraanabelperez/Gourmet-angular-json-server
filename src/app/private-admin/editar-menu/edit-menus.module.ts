import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditMenusComponent } from './edit-menus.component';
import { MenuListModule } from 'src/app/shared/menu/menu-list.module';
// import { MenusModule } from 'src/app/shared/menu/menu-list.module';


const routes: Routes = [
   {path: 'edit-menus', component:EditMenusComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MenuListModule
  ],
  declarations: [
    EditMenusComponent
  ],
  exports: [
    // RouterModule,
  ],
  providers: [],

})
export class EditMenuModule { }
