import { Component } from '@angular/core';
import { IUser } from './jens/user/iuser';

@Component ( {
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {

  date: number = Date.now();

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

  constructor () {
  }

  onSubmit () {
    this.userlist.push ( { ...this.newUser } );
  }
}
