import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CommonUIModule } from './common-ui/common-ui.module';
import { UserService } from './service/user/user.service';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonUIModule,
    RouterModule.forRoot( [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'list',
        component: UserComponent
      },
      {
        path: 'detail/:id',
        component: DetailComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ], {useHash: false})
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
