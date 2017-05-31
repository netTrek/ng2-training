import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JensComponent } from './jens/jens.component';
import { CommonUiModule } from './common-ui/common-ui.module';
import { CurrencyPipe } from '@angular/common';
import { PointService } from './point.service';
import { USER_REST_URL, UserService } from './user.service';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule ( {
  declarations: [
    AppComponent,
    JensComponent,
    HomeComponent,
    UsersComponent
  ],
  imports     : [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonUiModule,
    AppRoutingModule
  ],
  bootstrap   : [ AppComponent ],
  providers   : [
    { provide: LOCALE_ID, useValue: 'de' },
    { provide: USER_REST_URL, useValue: 'http://rest-api.flexlab.de/index.php/api/user' },
    PointService,
    UserService
  ]
} )
export class AppModule {

  constructor () {
    const currPipe: CurrencyPipe = new CurrencyPipe ( 'de' );
    console.log ( currPipe.transform( 123.44 , 'Eur', true ) );
  }

}
