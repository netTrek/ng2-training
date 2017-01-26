import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user/user.service';
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'avaya-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor( private $user: UserService, private $http: Http ) {

    console.log ( $user );

    $user.getUsers()
        .map ( response => response.json () )
        .catch ( ( error ) => {
          return Observable.throw ( new Error ( error.status ) );
          } )
        .subscribe(
            result => {
              console.log ( result );
            }
        );
    
  }

  ngOnInit() {
  }

}
