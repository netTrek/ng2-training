import { Component, HostListener } from '@angular/core';
import { UserDto } from './user/user-dto';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { log } from 'util';

@Component ( {
  selector   : 'msg-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {

  users: UserDto [] = [];

  date: number = Date.now ();

  className = 'supercool';

  isFett       = true;
  isUnderlined = true;

  progress = 30;

  mail   = 'us@netTrek.de';
  imgUrl = '../assets/images/netTrekLogo.png';

  showImg = true;

  imgInfo = 'schönes bild';
  desc    = `<strong class="supercool">Hello</strong><script>alert("sa");</script>`;

  title = 'msg';

  user: { name: string, age: number } = {
    name: 'saban',
    age : 43
  };
  disableList                         = false;

  currNo: number;

  constructor () {

    // const observable: Observable<number> = Observable.of ( 1, 2, 3, 4, 5 );
    // const observable: Observable<number> = Observable.range( 2, 22 );
/*

    const observable: Observable<number> = Observable.create ( observer => {
      observer.next( 1 );
      observer.next( 2 );
      // make xhr - http
      // observer.error ( 'ups' );
      observer.next( 3 );
      window.setTimeout( () => {
        observer.next( 4 );
        observer.complete();
      }, 1000 );
    });
*/
    // const observable: Subject<number> = new Subject();
    const observable: BehaviorSubject<number> = new BehaviorSubject(0);

    observable.next( 1 );
    observable.next( 2 );

    const sub: Subscription = observable
      // .filter ( val => val % 2 === 0 )
      // .map ( val => val * 100 )
      .subscribe(
        next => console.log ( next ),
        error => console.log ( error ),
        () => {
          console.log ('ioch habe fertig');
        }
      );


    observable.next( 3 );
    observable.next( 4 );

    console.log ( sub );
    const eventObservable: Observable<MouseEvent> = Observable.fromEvent ( document, 'mousemove');

    eventObservable
      .filter ( evt => evt.clientX < 100 )
      .subscribe( evt => console.log( evt ) );

/*
    observable.subscribe(
      ( next ) => {
        console.log ( next );
      },
      ( error ) => {
        console.log ( error );
      },
      () => {
        console.log ('ioch habe fertig');
      }
    );*/

    for ( let i = 0; i < 10; i ++ ) {
      this.users.push ( <UserDto> {
        firstname: `saban ${i}`,
        lastname : `uenlue ${i}`,
        age      : 22 + i,
        city     : `dorste ${i}`,
        zip      : `46282 - ${i}`
      } );
    }
    console.log ( this.users );
  }

  validate ( companyName?: string ): string {
    if ( (companyName || this.title) === 'msg' ) {
      return 'isMsg';
    }
    return 'isNotMsg';
  }

  keyDown ( event: KeyboardEvent ) {
    console.log ( 'keydown', event );
  }

  toggleFett () {
    this.isFett = ! this.isFett;
  }

  toggleUnderlined () {
    this.isUnderlined = ! this.isUnderlined;
  }

  @HostListener ( 'window:resize', [ '$event',
                                     'user',
                                     '123'
  ] )
  resize ( evt?: Event, name?: string, num?: string ) {
    console.log ( 'resize', evt, name, num );
  }

}
