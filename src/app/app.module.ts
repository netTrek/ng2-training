import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CommonUiModule } from './common-ui/common-ui.module';
import {UserService} from "./common-ui/user.service";
import {RouterModule} from "@angular/router";
import {UserListComponent} from "./common-ui/user-list/user-list.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonUiModule,
    RouterModule.forRoot( [
      {
        path: '',
        component: UserListComponent
      }
    ], {useHash: false})
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
