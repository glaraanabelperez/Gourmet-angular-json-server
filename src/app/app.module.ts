import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PublicModule } from './public/public.module';

import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HelperConvertService } from './helpers/helperConvert.service';

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
    NgbModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [HelperConvertService],
  bootstrap: [AppComponent]
})

export class AppModule { }
