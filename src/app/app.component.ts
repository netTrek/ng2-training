import { Component } from '@angular/core';
import { UserDto } from './model/user-dto';

@Component ( {
  selector   : 'hb-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {

  selectedUserDto: UserDto;

  title     = 'hb';
  fontColor = 'red';
  imgUrl    = '../assets/img/logo-klein.png';

  user: UserDto = <UserDto>{
    firstname: 'Saban',
    lastname: 'Ünlü',
    phone: '02362 999 4444'
  };

  userList: UserDto[] = [
    {
      firstname: 'usr1',
      lastname: 'u1',
      phone: 'u1 number'
    },
    {
      firstname: 'usr2',
      lastname: 'u2',
      phone: 'u2 number'
    }
  ];

  width = 160;
  selected = false;

  html = '<strong>saban</strong> ünlü <script>alert("you are hacked");</script>';

  constructor () {
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



  chgUser() {
    this.user = <UserDto>{
      firstname: 'Peter',
      lastname: 'Müller',
      phone: '4711'
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
