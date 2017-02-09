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

    constructor ( ) {
    }

    onClick () {
        // console.log ( 'Say :=', this.title );
    }

}
