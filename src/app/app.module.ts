import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CarComponent } from './car.component';
import { CommonUIModule } from './common-ui/common-ui.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      CommonUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
