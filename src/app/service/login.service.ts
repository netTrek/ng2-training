import { Injectable } from '@angular/core';
import { IUser } from './user/user.service';

let counter = 0;

@Injectable()
export class LoginService {

  loggedUsr: { nick: string, pwd: string} = { nick: 'netTrek', pwd: 'netTrek'};


  constructor() {

    console.log( 'gerater LoginService ' + (++counter) );

  }

  doLogin () {

  }

}
