import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IUser, UserService } from './service/user.service';

@Component ( {
  selector   : 'pta-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.css' ]
} )
export class AppComponent {

  usersList: BehaviorSubject<IUser[]> = new BehaviorSubject ( null );

  // usersList: string[] = [ 'heike', 'peter', 'saban', 'hans', 'paula' ];

  listClassInfo = 'liste';

  wahr = true;

  title = 'app works!';

  constructor ( $user: UserService ) {

    $user.getUsers ()
         .subscribe (
           userList => {
             // console.log ( userList );
             this.usersList.next ( userList );
           }
         );

  }

}
