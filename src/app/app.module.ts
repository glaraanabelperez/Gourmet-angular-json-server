import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PublicModule } from './public/public.module';

import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { NavClientDirective } from './directiveNavClient/nav-client.directive';
import { StorageService } from './public/components/login/service/storage.service';

const routes: Routes = [
  // {path: 'home', component:AppComponent},
];

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot(),
    PublicModule,
  ],
  declarations: [
    AppComponent,
    NavClientDirective,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
