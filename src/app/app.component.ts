import { Component } from '@angular/core';
import { UserDto } from './model/user-dto';

@Component ( {
  selector   : 'hb-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {

  firstname = 'saban';

  selectedUserDto: UserDto;

  title         = 'hb';
  fontColor     = 'red';
  imgUrl        = '../assets/img/logo-klein.png';
  showImg       = true;
  user: UserDto = <UserDto>{
    firstname: 'Saban',
    lastname : 'Ünlü',
    phone    : '02362 999 4444'
  };

  width    = 160;
  selected = false;

  html = '<strong>saban</strong> ünlü <script>alert("you are hacked");</script>';

  userList: UserDto[] = [];

  constructor () {

    for ( let i = 0; i < 10; i ++ ) {
      const userDTO: UserDto = <UserDto>{
        firstname: `Vorname ${i}`,
        lastname : `Nachname ${i}`,
        phone    : `02362 999 444 - ${i}`
      };
      this.userList.push ( userDTO );
    }

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

  selectUser ( userDto: UserDto ) {
    console.log ( 'user selected', userDto );
    this.selectedUserDto = userDto;
  }

  deleteUser ( ind: number ) {
    if ( confirm( 'Willst du den User wirklich löschen ') ) {
      this.userList.splice( ind, 1 );
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

  chgUser () {
    this.user = <UserDto>{
      firstname: 'Peter',
      lastname : 'Müller',
      phone    : '4711'
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
