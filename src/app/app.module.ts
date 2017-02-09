import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CommonUIModule } from './common-ui/common-ui.module';
import { ServiceModule } from './service/service.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,  //Common
    FormsModule,
    HttpModule,
    ServiceModule,
    CommonUIModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'de' }
    //otherProviders...
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  /*
  constructor ( @Inject (LOCALE_ID) localId : any ) {
    console.log ( localId);  //en_US
  }
  */

}
