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

    constructor ( public $user : UsersService ) {

        /*
        $user.getUsers()
             .subscribe(
                userList => this.dataprovider = userList
            );
        */

        this.users$ = this.$user.getUsers();

    }


    onClick () {
        // console.log ( 'Say :=', this.title );
    }

}
