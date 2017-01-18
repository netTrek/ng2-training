import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CommonUiModule} from './common-ui/common-ui.module';
import {UserServiceService} from './common-ui/user-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonUiModule
  ],
  providers: [ UserServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
