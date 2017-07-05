import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component ( {
  selector   : 'pta-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls  : [ './hello-world.component.css' ]
} )
export class HelloWorldComponent implements OnInit {

  num  = 12;
  name = 'saban';

  userService: UserService;

  constructor (  paramUserService: UserService ) {
    this.userService = paramUserService;
    console.log ( this.userService );
  }

  getClassName (): string {
    if ( this.num < 14 ) {
      return 'saban';
    }
    return 'nettrek';
  }

  getCountWithName (): string {
    return this.name + ' ' + this.num;
  }

  countUp () {
    this.num ++;
  }

  ngOnInit () {
  }

}
