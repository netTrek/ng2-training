import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JensComponent } from './jens/jens.component';
import { CommonUiModule } from './common-ui/common-ui.module';

@NgModule({
  declarations: [
    AppComponent,
    JensComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
