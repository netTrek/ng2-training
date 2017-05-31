import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JensComponent } from './jens/jens.component';
import { CommonUiModule } from './common-ui/common-ui.module';
import { CurrencyPipe } from '@angular/common';

@NgModule ( {
  declarations: [
    AppComponent,
    JensComponent

  ],
  imports     : [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonUiModule
  ],
  bootstrap   : [ AppComponent ],
  providers   : [
    { provide: LOCALE_ID, useValue: 'de' }
  ]
} )
export class AppModule {

  constructor () {
    const currPipe: CurrencyPipe = new CurrencyPipe ( 'de' );
    console.log ( currPipe.transform( 123.44 , 'Eur', true ) );
  }

}
