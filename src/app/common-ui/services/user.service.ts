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
import { IUser } from './iuser';


@Injectable ()
export class UserService {

  private readonly url = 'http://rest-api.flexlab.de/index.php/api/user/';

  constructor ( private $http: Http ) {
  }

  getUserbyID ( id: number|string ): Observable<IUser> {
    return this.$http.get ( this.url + id  )
               .map ( response => response.json () )
               .catch ( ( error ) => {
                 console.log ( 'could not map JSON', error );
                 return Observable.throw ( new Error ( error.status ) );
               } );

  }

  getUserList (): Observable<Array<IUser>> {

    return this.$http.get ( this.url )
               .map ( response => response.json () )
               .catch ( ( error ) => {
                 console.log ( 'could not map JSON', error );
                 return Observable.throw ( new Error ( error.status ) );
               } );
    // .subscribe ( next => console.log ( next ) );

  }

  /*getUserList (): Observable<Array<IUser>> {

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

   }*/
}
