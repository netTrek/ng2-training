import { Component } from '@angular/core';
import { IUser, UsersService } from './service/users.service';
import { Observable } from 'rxjs/Rx';

@Component ( {
    selector   : 'gfk-root',
    templateUrl: './app.component.html',
    styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {

    title = `Hello world!`;

    selectedInd : number = 3;
    dataprovider : IUser [];

    users$ : Observable<Array<IUser>>;

    selectedUser$ : Observable<IUser>;

    constructor ( public $user : UsersService ) {

        /*
        $user.getUsers()
             .subscribe(
                userList => this.dataprovider = userList
            );
        */

        this.users$ = this.$user.getUsers();
        this.selectedUser$ = this.$user.getUser( 7 );

    }

    updateSelectedUser( user : IUser ) {
        this.selectedUser$ = this.$user.getUser( user.id );
    }


    onClick () {
        // console.log ( 'Say :=', this.title );
    }

}
