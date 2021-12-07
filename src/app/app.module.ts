import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { PublicModule } from './public/public.module';

import { AuthService } from './service/auth.service';

import { AppComponent } from './app.component';
import { NavClientDirective } from './directive/nav-client.directive';

const routes: Routes = [
  // {path: 'home', component:AppComponent},
];


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    PublicModule
  ],
  declarations: [
    AppComponent,
    NavClientDirective,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
