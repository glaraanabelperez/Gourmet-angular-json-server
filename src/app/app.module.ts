import { CUSTOM_ELEMENTS_SCHEMA, NgModule,  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PrivateAdminModul } from './private-admin/private-admin.modul';
import { PrivateClientModul } from './private-clientes/private-client.modul';
import { PublicModule } from './public/public.module';

import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
];

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    ToastrModule.forRoot(),
    NgbModule,
    PublicModule,
    PrivateAdminModul,
    PrivateClientModul,
  ],
  declarations: [
    AppComponent,
  ],

  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent],

})

export class AppModule { }
