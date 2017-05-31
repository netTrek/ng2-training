import { Component } from '@angular/core';
import { IUser } from './jens/user/iuser';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/range';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromEvent';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component ( {
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {

  date: number = Date.now ();

  newUser: IUser = {};

  title = 'saban works!';

  userlist: IUser[] = [
    {
      username: 'saban',
      age     : 12
    },
    {
      username: 'peter',
      age     : 14
    },
    {
      username: 'franz',
      age     : 15
    },
    {
      username: 'hans',
      age     : 15
    }
  ];
  userlist$: Observable<Array<IUser>> = Observable.of ( this.userlist );

  constructor () {

    // const observable: Observable<number> = Observable.range ( 1, 5 );
    // const subscription: Subscription = Observable.merge ( observable, Observable.range (6, 5 ) )

    /*
    const observable: Observable<Array<IUser>> = Observable.of ( this.userlist, [...this.userlist, <IUser>{ username: 'obi', age: 999 } ] )
  */


    const observable: Observable<MouseEvent> = Observable.fromEvent ( document, 'mousemove' );
    observable
      .filter ( evt => evt.clientX < 100 )
      .subscribe( next => console.log ( next ) );

    /*
    const observable: Observable<number> = Observable.create (
        subject => {
          subject.next( Math.random() );
      }
    );
    observable.subscribe( next => console.log ( next ) );
    observable.subscribe( next => console.log ( next ) );
    */

    const subject: BehaviorSubject<number> = new BehaviorSubject ( 2 );
    // subject.next( 2 );

    const subscription: Subscription = subject
         .filter (
           val => val % 2 === 0
         )
         .map (
           val => val * 10
         )
         .subscribe (
           nextVal => {
             console.log ( 'newVal', nextVal );
           }             ,
           error => console.log ( 'error', error ),
           () => {
             console.log ( 'ich habe fertig' );
           }
           /*
            (newVal: number) => { // next value
            console.log ( 'newVal', newVal );
            },
            ( err ) => { // Fehlerbehandlung
            console.log ( 'error', err );
            },
            () => {
            console.log ( 'ich habe fertig' );
            }
            */
         );

/*
    console.log ( subscription );

    subject.next( 1 );
    subject.next( 2 );
    subject.next( 3 / 0 );
*/

    // subject.error( 'ups .... ' );

    // subscription.unsubscribe ();
/*
    subject.complete();

    subject.next( 4 );
    subject.next( 5 );
*/
  }

  onSubmit () {
    this.userlist.push ( { ...this.newUser } );
  }
}
