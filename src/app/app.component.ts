import { Component } from '@angular/core';
import { UserDto } from './model/user-dto';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserService } from './user/service/user.service';

@Component ( {
  selector   : 'hb-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {

  firstname = 'saban';

  now = Date.now ();

  selectedUserDto: UserDto;

  title         = 'hb';
  fontColor     = 'red';
  imgUrl        = '../assets/img/logo-klein.png';
  showImg       = true;
  user: UserDto = <UserDto>{
    firstname: 'Saban',
    lastname : 'Ünlü'/*,
    phone    : '02362 999 4444'*/
  };

  width    = 160;
  selected = false;

  html = '<strong>saban</strong> ünlü <script>alert("you are hacked");</script>';

  userList: UserDto[] = [];

  constructor ( $userService: UserService ) {



/*

    $userService.getUser( 30 )
      .subscribe(
        user => {
          console.log ( user );
        },
        err => {
          alert( err );
        }
      );
*/

/*

    $userService.addUser( <UserDto>{
      firstname: 'sabanü',
      lastname: 'sabanü',
      birthday: null,
      street: null,
      street_no: null,
      zip: null,
      city: null,
    })
      .subscribe(
        newUser => {
          console.log ( newUser );
        },
        err => {
          alert( err );
        }
      );
*/


/*                            !!!!!! COLD
    const observable: Observable<number> = Observable.of( 5, 10);
    const observable: Observable<number> = Observable.range( 5, 10);
    */
/*
    const observable: Observable<number> = Observable.create ( observer => {
      observer.next( 1 );
      observer.next( 2 );
      observer.next( 3 );
      // observer.error( 'huppa .... ');
      observer.next( 4 );
      observer.complete();
    } );
    const subscription: Subscription     = observable
       .filter( x => x % 2 === 0 )
       .map( x => x * 100 )
       .subscribe (
          ( next ) => {
            console.log ( next );
          },
          ( err ) => {
            console.log ( err );
          },
          () => {
            console.log ( ' bin fertig ' );
          }
        );

    subscription.unsubscribe();
    */
/*
    observable.subscribe (
      next => console.log ( next ),
      err => console.log ( err ),
      () => {
        console.log ( 'fertig' );
      }
    );
*/

    /*                            !!!!!! HOT */

/*

    // const observable: Subject<number> = new Subject();
    const observable: BehaviorSubject<number> = new BehaviorSubject(  0 );

    observable.next( 1 );
    observable.next( 2 );


    observable.subscribe (
      next => console.log ( next ),
      err => console.log ( err ),
      () => {
        console.log ( 'fertig' );
      }
    );

    observable.next( 3 );
    observable.next( 4 );
*/
/*

    const observable: Observable<MouseEvent> = Observable.fromEvent( document, 'mousemove' );
    observable
      .filter ( evt => evt.clientX < 100 )
      .subscribe (
        evt => console.log( evt )
      );

*/


/*
        for ( let i = 0; i < 10; i ++ ) {
          const userDTO: UserDto = <UserDto>{
            firstname: `Vorname ${i}`,
            lastname : `Nachname ${i}`/!*,
            phone    : `02362 999 444 - ${i}`*!/
          };
          this.userList.push ( userDTO );
        }
*/

        /*
        let num = 0;
        const intervalID = setInterval ( () => {
          console.log ('interval');
          if ( ++num === 2 ) {
            clearInterval( intervalID );
          }
        }, 1000 );
        */
  }
/*

  selectUser ( userDto: UserDto ) {
    console.log ( 'user selected', userDto );
    this.selectedUserDto = userDto;
  }

  deleteUser ( ind: number ) {
    if ( confirm ( 'Willst du den User wirklich löschen ' ) ) {
      this.userList.splice ( ind, 1 );
      this.selectedUserDto = null;
    }
  }

  getClass ( even: boolean, user: UserDto ): string {
    if ( user === this.selectedUserDto ) {
      return 'selected';
    } else if ( even === true ) {
      return 'even';
    }
    return 'odd';
  }
*/

  chgUser () {
    this.user = <UserDto>{
      firstname: 'Peter',
      lastname : 'Müller'/*,
      phone    : '4711'*/
    };
  }

  onClick ( title?: string, evt?: MouseEvent ) {

    if ( evt.altKey ) {
      // console.log ( 'alt gedrück' );

      if ( confirm ( 'darf ich weiter machen ' ) ) {
        this.title = title + evt.clientX;
      }
    }
  }

  getTitle (): string {
    // return 'welcome to ' + this.title;
    return `welcome to ${this.title} !`;
  }
}
