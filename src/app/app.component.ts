import { Component } from '@angular/core';
import {ReversePipe} from './common-ui/reverse.pipe';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'baywa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app works!';
  now: number = Date.now();
  selectedInd: number = 0;

  constructor (  ) {

    const observable : Observable<number> = Observable.create ( observer => {
      console.info ( 'Subscriber:= ', observer );
      observer.next( 1 );
      observer.next( 2 );
      observer.next( 3 );
      //observer.error( 'failed' );
      observer.complete();
    });

    const subscription : Subscription = observable
      .filter ( val => { return val % 2 === 0; } ) //nur gerade
      .map ( item => item += 1 )                   //ungerade machen
      .subscribe(
        next => console.info ( 'next %s', next ),
        error => console.info ( 'error %s', error ),
        () => console.info ( 'complete' ),
      );


    if ( !!subscription.closed ) {
      subscription.unsubscribe();
    }

  }


  /*
  chg ( ind: number ) {
    console.info ( ind );
  }
  */

}
