import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {
  Http,
  Request,
  RequestMethod,
  RequestOptions,
  URLSearchParams, Headers
} from '@angular/http';

export interface IUser {
  id: string;
  firstname: string;
  lastname: string;
  birthday: string;
  street: string;
  street_no: string;
  zip: string;
  city: string;
}

@Injectable ()
export class UserService {

  constructor ( private $http: Http ) {
  }

  getUserList (): Observable<Array<IUser>> {

    const url = 'http://rest-api.flexlab.de/index.php/api/user/';

    const reqOpt: RequestOptions = new RequestOptions ();

    reqOpt.url    = url;
    reqOpt.method = RequestMethod.Get;

    const params: URLSearchParams = new URLSearchParams ();
    params.set ( 'token', 'netTrek' );

    reqOpt.params = params;

    const header: Headers = new Headers ();
    header.append ( 'Authorization', 'basic' );

    reqOpt.headers = header;

    const req: Request = new Request ( reqOpt );

    return this.$http.request ( req )
               .map ( response => response.json () )
               .catch ( ( error ) => {
                 console.log ( 'could not map JSON', error );
                 return Observable.throw ( new Error ( error.status ) );
               } );

    /*
     return this.$http.get ( url )
     .map ( response => response.json () )
     .catch ( ( error ) => {
     console.log ( 'could not map JSON', error );
     return Observable.throw ( new Error ( error.status ) );
     } );
     // .subscribe ( next => console.log ( next ) );

     */
  }
}
