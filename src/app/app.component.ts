import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component ( {
  selector   : 'pta-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.css' ]
} )
export class AppComponent {

  usersList: BehaviorSubject<string[]> = new BehaviorSubject( ['saban'] );

  // usersList: string[] = [ 'heike', 'peter', 'saban', 'hans', 'paula' ];

  listClassInfo = 'liste';

  wahr = true;

  title = 'app works!';

  constructor () {
/*
    const observable: Observable<number> = Observable.create ( observer => {
      observer.next( 1 );
      observer.next( 2 );
      observer.next( 3 );
      observer.error( 'ups ');
      observer.next( 4 );
      observer.next( 5 );
      observer.next( 100 );
      observer.complete();
    } );

    */

    const observable: Subject<number> = new Subject ();

    observable
      .filter ( val => val % 2 === 0 )
      .map ( val => val * 10 )
      .subscribe (
        newVal => console.log ( 'next', newVal ),
        err => console.log ( 'err', err ),
        () => {
          console.log ( 'ich habe fertig' );
        }
      );


    observable.next( 1 );
    observable.next( 2 );

    observable.subscribe( next => console.log ( next ) );

    observable.next( 3 );
    observable.next( 4 );

    setTimeout( () => {
      this.usersList.next( [ 'heike', 'peter', 'saban', 'hans', 'paula' ] );
    }, 3000 );

  }

  replaceUsers () {
      this.usersList.next( [ 'rep_heike', 'rep_peter', 'rep_saban', 'rep_hans', 'rep_paula' ] );
  }

}
