import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserModule } from './user/user.module';
import { ComonUIModule } from './comon-ui/comon-ui.module';

@NgModule ( {
  declarations: [
    AppComponent
  ],
  imports     : [
    BrowserModule,
    UserModule,
    ComonUIModule,
    AppRoutingModule
  ],
  providers   : [],
  bootstrap   : [ AppComponent ]
} )
export class AppModule {
}

