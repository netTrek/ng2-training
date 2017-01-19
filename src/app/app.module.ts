import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CommonUiModule } from './common-ui/common-ui.module';
import {UserService} from "./common-ui/user.service";
import {RouterModule} from "@angular/router";
import {UserListComponent} from "./common-ui/user-list/user-list.component";
import {HomeComponent} from "./common-ui/home/home.component";
import {UserDetailsComponent} from "./common-ui/user-details/user-details.component";
import {ResolveService} from "./common-ui/resolve.service";
import {CanActiveService} from "./common-ui/can-active.service";
import {ContactComponent} from "./common-ui/contact/contact.component";
import {ContactDetailsComponent} from "./common-ui/contact-details/contact-details.component";
import {ContactFormsComponent} from "./common-ui/contact-forms/contact-forms.component";

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
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'list',
        component: UserListComponent
      },
      {
        path: 'details/:id',
        component: UserDetailsComponent,
        resolve: {
          user: ResolveService
        }
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [ CanActiveService ]
      },
      {
        path: 'contact',
        component: ContactComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'base'
          },
          {
            path: 'base',
            component: ContactDetailsComponent
          },
          {
            path: 'form',
            component: ContactFormsComponent
          }
        ]
      },
      {
        path: '**',
        redirectTo: 'home'
      },
    ], {useHash: false})
  ],
  providers: [ UserService, ResolveService, CanActiveService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
