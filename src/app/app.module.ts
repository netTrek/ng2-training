import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CommonUIModule } from './common-ui/common-ui.module';
import { Saban } from './common-ui/saban.service';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-route/user-list/user-list.component';
import { UserRouteModule } from './user-route/user-route.module';
import { HomeComponent } from './home/home/home.component';
import { HomeModule } from './home/home.module';
import { UserDetailRouteModule } from './user-detail-route/user-detail-route.module';
import { UserDetailsComponent } from './user-detail-route/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonUIModule,
    UserRouteModule,
    HomeModule,
    UserDetailRouteModule,
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
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'detail/:id',
        component: UserDetailsComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ])
  ],
  providers: [ Saban ],
  bootstrap: [AppComponent]
})
export class AppModule { }
