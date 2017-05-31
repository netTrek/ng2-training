import { Component, OnInit } from '@angular/core';
import { IUser } from './jens/user/iuser';


import { PointService } from './point.service';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';

@Component ( {
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent implements OnInit {


  date: number = Date.now ();

  title = 'saban works!';

  // userlist: IUser[];
  userlist$: Observable<Array<IUser>>;

  constructor ( private $user: UserService, public $point: PointService ) {
  }

  ngOnInit (): void {
    this.userlist$ = this.$user.getUserList();
  }
}
