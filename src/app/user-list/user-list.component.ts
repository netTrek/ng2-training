import { Component, OnInit } from '@angular/core';
import { UsersService, IUser } from '../service/users.service';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { ROUTES } from '../app.module';

@Component({
  selector: 'gfk-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {


  selectedInd : number = 3;
  users$ : Observable<Array<IUser>>;


  constructor( public $user : UsersService, private $router : Router  ) {

    this.users$ = this.$user.getUsers();
  }


  updateSelectedUser( user : IUser ) {
    this.$router.navigate( [ ROUTES.USER, user.id ] );
  }

  ngOnInit() {
  }

}
