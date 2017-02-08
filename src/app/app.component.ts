import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ReversePipe } from './common-ui/reverse.pipe';

export interface IUser {
    firstname : string;
    lastname : string;
    age : number;
}

@Component ( {
    selector   : 'gfk-root',
    templateUrl: './app.component.html',
    styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {

    title = `Hello world!`;

    selectedInd : number = 3;

    columns : string [] = [ 'age', 'firstname' ];

    dataprovider : IUser [] = [
        {
            firstname: 'saban',
            lastname : 'ünlü',
            age      : 43
        },
        {
            firstname: 'peter',
            lastname : 'müller',
            age      : 22
        },
        {
            firstname: 'Frank',
            lastname : 'Mustermann',
            age      : 12
        },
        {
            firstname: 'Klaus',
            lastname : 'Klaus',
            age      : 33
        }
    ];

    listTitle : string = 'list title';

    constructor ( $http : Http ) {

        console.log ( '$http', $http );

        const myReversePipe : ReversePipe = new ReversePipe ();
        console.log ( myReversePipe.transform( 1230 ) );
        console.log ( myReversePipe.transform( '123' ) );
        console.log ( myReversePipe.transform( [1,2,3] ) );

    }

    chgInd ( newInd : number ) {
        console.log ( 'index changed', newInd );
        this.selectedInd = newInd;
    }

    outputGen ( val : IUser ) : string {
        return val.age + ' ' + val.lastname;
    }

    onClick () {
        console.log ( 'Say :=', this.title );
    }

}
