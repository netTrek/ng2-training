import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserModule } from './user/user.module';
import { CommonUIModule } from './common-ui/common-ui.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    CommonUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
