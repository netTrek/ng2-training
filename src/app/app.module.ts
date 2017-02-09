import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CommonUIModule } from './common-ui/common-ui.module';
import { ServiceModule } from './service/service.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { ResolveUserService } from './service/resolve-user.service';

export const ROUTES = {
    HOME: 'home',
    USER: 'user',
    LIST: 'list',
};

@NgModule ( {
    declarations: [
        AppComponent,
        HomeComponent,
        UserListComponent,
        UserListComponent,
        UserComponent
    ],
    imports     : [
        BrowserModule,  //Common
        FormsModule,
        HttpModule,
        ServiceModule,
        CommonUIModule,
        RouterModule.forRoot ( [
            {
                path      : '',
                pathMatch : 'full',
                redirectTo: ROUTES.HOME
            },
            {
                path     : ROUTES.HOME,
                component: HomeComponent
            },
            {
                path     : ROUTES.USER + '/:id',
                component: UserComponent,
                resolve  : {
                    user: ResolveUserService
                }
            },
            {
                path     : ROUTES.LIST,
                component: UserListComponent
            },
            {
                path      : '**',
                redirectTo: ROUTES.HOME
            },
        ], { useHash: false } )
    ],
    providers   : [
        { provide: LOCALE_ID, useValue: 'de' }
        //otherProviders...
    ],
    bootstrap   : [ AppComponent ]
} )
export class AppModule {
    /*
     constructor ( @Inject (LOCALE_ID) localId : any ) {
     console.log ( localId);  //en_US
     }
     */

}
