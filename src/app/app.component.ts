import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ReversePipe } from './common-ui/reverse.pipe';
import { Observable, Subscription, Subject, BehaviorSubject } from 'rxjs/RX';

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

    private usersObserver : BehaviorSubject<any> = new BehaviorSubject<any> ( null );
            users$ : Observable<any>             = this.usersObserver.asObservable ();

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
        /*
        const observable : Observable<MouseEvent> = Observable.fromEvent ( document, 'mousemove' );
        const subscription : Subscription         = observable
            .filter ( evt => evt.clientX < 100 )
            .subscribe (
                next => console.log( 'next mouse event', next )
            );
        */

        //const observable : Observable<number> = Observable.range ( 1, 5 );
        //const observable : Observable<number> = Observable.of ( 1, 2, 3, 4, 4,  5 );
        /*
         const observable : Observable<number> = Observable.create (
         observer => {
         observer.next ( 1 );
         observer.next ( 2 );
         observer.error ( 'so nicht!' );
         observer.next ( 3 );
         observer.complete();
         }
         );
         */
        /*
         const observer : Subject<number> = new Subject<number> ();
         const observable : Observable<number> = observer.asObservable();

         const subscription : Subscription     = observable
         .subscribe (
         next => console.log ( 'next', next ),  //next
         error => console.log ( 'error', error ),  //error
         () => {
         console.log ( 'complete' );
         }  //complete
         );

         observer.next( 1 );
         observer.next( 2 );
         console.log ( 'sub', subscription );
         observer.next( 3 );

         if ( ! subscription.closed ) {
         subscription.unsubscribe();
         }

         observer.next( 4 );
         observer.complete();
         console.log ( 'sub', subscription );

         */

        // subscription.unsubscribe();

        // console.log ( '$http', $http );

        // const myReversePipe : ReversePipe = new ReversePipe ();
        // consol#e.log ( myReversePipe.transform( 1230 ) );
        // console.log ( myReversePipe.transform( '123' ) );
        // console.log ( myReversePipe.transform( [1,2,3] ) );

        this.usersObserver.next ( { username: 'netTrek', age: 12 } );

    }

    chgInd ( newInd : number ) {
        // console.log ( 'index changed', newInd );
        this.selectedInd = newInd;
    }

    updateStream () {
        this.usersObserver.next ( { username: 'saban', age: 43 } );
    }

    outputGen ( val : IUser ) : string {
        return val.age + ' ' + val.lastname;
    }

    onClick () {
        // console.log ( 'Say :=', this.title );
    }

}
