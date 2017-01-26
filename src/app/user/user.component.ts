import { Component, OnInit } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IUser, UserService } from '../service/user/user.service';

@Component({
  selector: 'avaya-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userList: IUser[] = [];


  constructor( private $user: UserService, private $http: Http ) {

  }

  ngOnInit() {
      this.$user.getUsers()
           .map ( response => response.json () )
           .catch ( ( error ) => {
               return Observable.throw ( new Error ( error.status ) );
           } )
           .subscribe(
               result => {
                   console.log ( result );
                   this.userList = result;
               }
           );
  }

}
