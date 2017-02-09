import { Injectable } from '@angular/core';
import { Http, RequestOptions, RequestMethod, Request, Response, URLSearchParams } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs/RX';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';

export interface IUser {
    id : string;
    firstname : string;
    lastname : string;
    birthday : string;
    street : string;
    street_no : string;
    zip : string;
    city : string;
}

@Injectable ()
export class UsersService {

    constructor ( private $http : Http ) {
    }

    getUsers () : Observable<Array<IUser>> {

        const reqOptions : RequestOptions = new RequestOptions ();
        reqOptions.url                    = 'http://rest-api.flexlab.de/index.php/api/user/';
        reqOptions.method                 = RequestMethod.Get;

        const queries : URLSearchParams = new URLSearchParams ();
        queries.append ( 'token', '4711' );

        reqOptions.search = queries

        return Observable.create (
            observer => {

                const observable : Observable<Response> = this.$http.request ( new Request ( reqOptions ) );
                // const observable : Observable<Response> =   this.$http.get ( 'http://rest-api.flexlab.de/index.php/api/user/' );

                observable
                    .map ( response => response.json () )
                    .catch ( ( error ) => {
                        return Observable.throw ( 'could not parse body to json' );
                    } )
                    .subscribe (
                        userList => {
                            observer.next ( userList );
                            observer.complete ();
                        },
                        error => console.error ( error )
                    );

            }
        );

    }

    outputGen ( val : IUser ) : string {
        return val.firstname + ' ' + val.lastname;
    }

}
