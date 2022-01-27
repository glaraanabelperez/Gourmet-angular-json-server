import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './service/auth.service';
import { LoginComponent } from './login.component';
import { StorageService } from 'src/app/public/components/login/service/storage.service';
import { DataUserComponent } from './data-user/data-user.component';
import { EditUserComponent } from './data-user/edit-user/edit-user.component';


const routes: Routes = [
  {path: 'login', component:LoginComponent},
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
    LoginComponent,
    DataUserComponent,
    EditUserComponent,
  ],
  exports: [],
  providers: [AuthService, StorageService],

})
export class LoginModule { }
