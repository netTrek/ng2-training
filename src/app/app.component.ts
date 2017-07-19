import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/range';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Saban } from './common-ui/saban.service';
import { isNumber } from 'util';
import { UserService } from './common-ui/services/user.service';

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

  now = Date.now ();

  list: string[] = [ 'peter', 'hans', 'saban', 'heike' ];

  className = 'cssclasse';

  userVOs: IUser[];

  userOb: Observable<Array<IUser>>;

  constructor ( public saban: Saban, public $user: UserService  ) {

    console.log ( saban, $user );
    this.userOb = $user.getUserList();

  }

  checkRest ( rest: number ) {
    if ( rest === 7 ) {
      this.saban.chgName();
    }
  }


}
