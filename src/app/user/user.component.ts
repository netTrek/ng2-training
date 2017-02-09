import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService, IUser } from '../service/users.service';
import { Observable } from 'rxjs/Rx';

@Component ( {
    selector   : 'gfk-user',
    templateUrl: './user.component.html',
    styleUrls  : [ './user.component.scss' ]
} )
export class UserComponent implements OnInit {

    // private user$ : Observable<IUser>;

    user : IUser;

    constructor ( private $route : ActivatedRoute,
                  /*private $user : UsersService*/ ) {
    }

    ngOnInit () {

        //hallo

        this.$route
            .data
            .map ( data => data ['user'] )
            .subscribe( user => this.user = user );

        /*
        this.$route
            .params
            .map ( params => params[ 'id' ] )
            .subscribe (
                id => this.user$ = this.$user.getUser ( id )
            );
        */



    }

}
