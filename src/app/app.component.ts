import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/range';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Subscription } from 'rxjs/Subscription';

export interface IUser {
  fistname: string;
  lastname: string;
  age: number;
}

@Component ( {
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.css' ]
} )
export class AppComponent {

  title = 'app works!';

  now = Date.now();

  list: string[] = [ 'peter', 'hans', 'saban', 'heike' ];

  className = 'cssclasse';

  userVOs: IUser[] = [
    {
      fistname: 'saban',
      lastname: 'ünlü',
      age     : 43
    },
    {
      fistname: 'hans',
      lastname: 'walter',
      age     : 12
    }
  ];

  constructor () {

    // const observable: Observable<number> = Observable.of ( 1, 2, 3, 4, 5, 66 );


    const observable: Observable<number> = Observable.create ( observer => {
      /*
      observer.next( 1 );
      observer.next( 2 );
      observer.next( 3 );
      observer.error( 'ups ....');
      observer.next( 66 );
      observer.complete();
      observer.next( 88 );
      */

      let count = 0;
      const intervalID = setInterval ( () => {
        count++;
        observer.next( count );
        if ( count === 10 ) {
          clearInterval( intervalID );
          observer.complete();
        }
      }, 500 );

    } );

    const subscription: Subscription = observable
      .filter ( crrVal => crrVal % 2 === 0 )
      .map ( crrVal => crrVal * 10 )
      .subscribe(
            (nextVal) => {
              console.log ( 'wert', nextVal );
            },
            (error) => {
              console.log ( 'fehler', error );
            },
            () => {
              console.log ( 'fertig' );
            }
          );

    observable.subscribe(
      next => console.log ('zweitre sub', next ),
      error => console.log ('zweitre error', error )
    );


  }


  /*
   rest: number;
   showCountdown = true;
   totalTime = 22;

   username = 'saban';

   divWidth = 200;

   fontColor = 'red';

   imgUrl = '../assets/images/logo-gross.png';

   htmlBindung = `<strong>saban</strong>
   <script>alert('hacked')</script>`;

   getTitle (): string {
   return 'String als Rückgabe ' + this.title;
   }

   updateTitle ( mouseEvt: MouseEvent ) {
   console.log ( mouseEvt );
   this.title = 'saban ünlü ' + mouseEvt.clientX;
   }

   updateRestTime ( time: number ) {
   console.log ( 'restTime triggered', time );
   this.rest = time;
   }

   updateTotalTime () {
   this.totalTime = 33;
   }

   usrNameUpdated ( newUsername : string ) {
   console.log ( 'new user name is := ' , newUsername );
   this.username = newUsername;
   }
   */

}
