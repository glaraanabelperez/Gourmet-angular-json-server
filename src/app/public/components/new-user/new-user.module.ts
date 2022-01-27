import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { NewUserComponent } from './new-user.component';


const routes: Routes = [
  {path: 'new-user', component:NewUserComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    NewUserComponent
  ],
  exports: [],
  providers: [ ],

})
export class NewUserModule { }
