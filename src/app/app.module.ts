import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserModule } from './user/user.module';
import { CommonUIModule } from './common-ui/common-ui.module';
import { DeviceService } from './common-ui/service/device.service';
import { HttpModule } from '@angular/http';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';

@NgModule ( {
  declarations: [
    AppComponent,
    HelloWorldComponent
  ],
  imports     : [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    HttpModule,
    UserModule,
    ContactModule,
    CommonUIModule
  ],
  providers   : [

    { provide: LOCALE_ID, useValue: 'de' },
    DeviceService

  ],
  bootstrap   : [ AppComponent ]
} )
export class AppModule {
}
