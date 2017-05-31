import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../user.service';
import { PointService } from '../point.service';
import { IUser } from '../jens/user/iuser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userlist$: Observable<Array<IUser>>;

  constructor ( private $user: UserService, public $point: PointService ) {
  }

  ngOnInit (): void {
    this.userlist$ = this.$user.getUserList();
  }

}
