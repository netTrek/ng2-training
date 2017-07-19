import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CommonUIModule } from './common-ui/common-ui.module';
import { Saban } from './common-ui/saban.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonUIModule
  ],
  providers: [ Saban ],
  bootstrap: [AppComponent]
})
export class AppModule { }
