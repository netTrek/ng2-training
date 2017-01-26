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
import { DetailResolverService } from './detail/detail-resolver.service';
import { DetailCanActiveService } from './detail/detail-can-active.service';
import { LoginService } from './service/login.service';
import { ContactComponent } from './contact/contact.component';
import { ContactDetailsComponent } from './contact/contact-details/contact-details.component';
import { ContactMapComponent } from './contact/contact-map/contact-map.component';
import { PermissionService } from './service/permission.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    DetailComponent,
    ContactComponent,
    ContactDetailsComponent,
    ContactMapComponent
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
        path: 'dash',
        loadChildren: './dash/dash.module#DashModule'
      },
      {
        path: 'contact',
        component: ContactComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'detail'
          },
          {
            path: 'detail',
            component: ContactDetailsComponent
          },
          {
            path: 'map',
            component: ContactMapComponent
          }
        ]
      },
      {
        path: 'detail/:id',
        component: DetailComponent,
        resolve: {
          user: DetailResolverService
        },
        canActivate: [
          DetailCanActiveService
        ]
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ], {useHash: false})
  ],
  providers: [UserService, DetailResolverService, DetailCanActiveService, LoginService, PermissionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
