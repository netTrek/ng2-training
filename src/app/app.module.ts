import { BrowserModule } from '@angular/platform-browser';
import { forwardRef, NgModule, Type } from '@angular/core';

import { AppComponent } from './app.component';
import { UpgradeModule } from '@angular/upgrade/static';
// import { UserDirective } from './upgrade-fromng1/user.directive';
import { downgradeComponent, downgradeInjectable } from '@angular/upgrade/static';
import { UserDirective } from './upgrade-fromng1/user.directive';
import { ToasterContainerDirective } from './upgrade-fromng1/toaster-container.directive';

export function getModelServiceFromNg1Injector ( injector: any, ng1ServiceName: string ) {
  console.log ( 'get ', ng1ServiceName );
  const service: any = injector.get ( ng1ServiceName );
  console.log ( service );
  return service;
}

export function forwardRefFct (): Type<AppModule> {
  return AppModule;
}

// const adapter = new UpgradeAdapter ( forwardRef ( () => AppModule ) );
// export const adapter = new UpgradeAdapter ( forwardRef ( forwardRefFct ) );

// export const adapter = new UpgradeAdapter ( forwardRef ( forwardRefFct ) );
/*

let __adapter: UpgradeAdapter;

export function getUpgradeAdapter (): UpgradeAdapter {
  if ( ! __adapter ) {
    __adapter = new UpgradeAdapter ( AppModule );
  }
  return __adapter;
}
*/


@NgModule ( {
  declarations   : [
    AppComponent,
    UserDirective,
    /*
    ToasterContainerDirective
    ,
    getUpgradeAdapter ().upgradeNg1Component ( 'user' )
        */
  ],
  imports        : [
    BrowserModule,
    UpgradeModule
  ],
  providers      : [
    { provide: 'ng1ServiceModel', useValue: 'model' },
    { provide: 'ng1ServiceToaster', useValue: 'toaster' },
    { provide: 'model', useFactory: getModelServiceFromNg1Injector, deps: [ '$injector', 'ng1ServiceModel' ] },
    { provide: 'toaster', useFactory: getModelServiceFromNg1Injector, deps: [ '$injector', 'ng1ServiceToaster' ] }
  ],
  entryComponents: [ AppComponent ]
  /*,
  bootstrap   : [ AppComponent ]*/
} )
export class AppModule {
  constructor ( private upgrade: UpgradeModule ) {
    console.log ( '1', upgrade );
    /*this.upgrade.bootstrap ( document.body, [ 'app' ] );*/
  }

  ngDoBootstrap () {
    /*
    this.upgrade.bootstrap ( document.body, [ 'MyApp' ], { strictDi: true } );
    */
    console.log ( '2', 'ngDoBootstrap ' );
    (<any>window).angular
                 .module ( 'app' )
                 .directive ( 'appRoot', downgradeComponent( {component: AppComponent }) );
    this.upgrade.bootstrap ( document.body, [ 'app', 'toaster', 'ngAnimate' ] );
  }
}

