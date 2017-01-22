import { Component } from '@angular/core';
import {Observable, Subscription, Subject, BehaviorSubject} from 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app works!';
  selInd: number = 1;

  constructor ( router: Router ) {

    router.events
      .subscribe(
        evt => console.warn( evt )
      );


    /*
    Observable.fromEvent<MouseEvent> ( document, 'mousemove')
      .filter ( evt => evt.clientX < 100 )
      .subscribe(
        evt => console.warn( evt )
      );
    */


    /*
    const observable: Observable<number> = Observable.range ( 1, 5 );
    const observable: Observable<number> = Observable.of<number> ( 1, 2 , 2 , 3 , 5, 4 );
    */

    /*
    const observable: Observable<number> = Observable.create (
      observer => {
        observer.next( 1 );
        observer.next( 2 );
        observer.next( 3 );
        observer.error( 'failed' );
        observer.next( 4 );
        observer.next( 5 );
        observer.complete();
      }
    );
    */

    const observer: BehaviorSubject<number> = new BehaviorSubject<number> ( 100 );
    // const observer: Subject<number> = new Subject<number> ();
    const observable: Observable<number> = observer.asObservable();

    console.warn ( observer.value );

    observer.next( 1 );
    observer.next( 2 );
    observer.next( 3 );
    observer.next( 4 );

    const subscription: Subscription = observable
      /*
      .filter ( ( value: number ) => {
          return value % 2 === 0;
      })
      */
      .filter ( value => { return value % 2 === 0; } )
      .map ( value => ++value )
      .subscribe(
      /*
      ( next: number ) => {
        console.warn( next );
      }
      */
      next => console.warn ( 'next %s', next ),
      error => console.warn ( 'error %s', error ),
      () => { console.warn ( ' #### fertig ### ' ); }

    );

    observer.next( 5 );
    observer.next( 6 );
    observer.next( 7 );

    /*
    console.warn ( subscription );
    if ( ! subscription.closed ) {
      subscription.unsubscribe();
    }
    */

  }

  indChgHandler ( ind: number ) {
    this.selInd = ind;
  }

}
