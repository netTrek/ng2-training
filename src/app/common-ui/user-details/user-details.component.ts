import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/map';
import {IUser} from '../user.service';

@Component({
  selector: 'baywa-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userId: number;
  user: IUser;

  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {

    this.route
      .params
      .map(params => params['id'] )
      .subscribe( id => this.userId = id );


    this.route
      .data
      .map ( data => data['user'] )
      .subscribe( user => this.user = user );

  }

}
