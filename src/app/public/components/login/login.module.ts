import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './service/auth.service';
import { LoginComponent } from './login.component';
import { StorageService } from 'src/app/public/components/login/service/storage.service';


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
    LoginComponent
  ],
  exports: [
    RouterModule,
    LoginComponent,
  ],
  providers: [AuthService, StorageService],

})
export class LoginModule { }
