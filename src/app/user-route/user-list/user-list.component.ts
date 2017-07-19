import { Component, OnInit } from '@angular/core';
import { UserService } from '../../common-ui/services/user.service';
import { Observable } from 'rxjs/Observable';
import { IUser } from '../../common-ui/services/iuser';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userOb: Observable<Array<IUser>>;

  constructor( public $user: UserService ) {
    this.userOb = $user.getUserList();
  }

  ngOnInit() {
  }

}
