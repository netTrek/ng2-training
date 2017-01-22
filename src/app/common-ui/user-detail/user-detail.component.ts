import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService, IUser} from '../user.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  selectedUsrId: number;
  user: IUser;

  constructor( private route: ActivatedRoute, private $user: UserService ) {

      this.$user.userObservable.subscribe(
        user => {
          console.warn ( 'detail user', user );
          this.user = user;
        }
      );

  }

  ngOnInit() {

    /*
    this.route.params
      .map ( params => params['id'] )
      .subscribe(
          id => {
            this.selectedUsrId = id;

            this.$user.getUser( id )
              .filter ( result => result !== null )
              .subscribe(
                usr => this.user = usr
              );
          }
      );
      */
  }

}
