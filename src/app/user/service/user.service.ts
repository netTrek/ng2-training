import { Injectable } from '@angular/core';
import { Headers, Http, Request, RequestMethod, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UserDto } from '../../model/user-dto';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { HttpParams } from '@angular/common/http';

@Injectable ()
export class UserService {

  static readonly API_URL = 'http://rest-api.flexlab.de/index.php/api/user/';

  constructor ( private $http: Http ) {

    console.log ( $http );

  }

  getUsers (): Observable<UserDto[]> {
    return Observable.create ( observer => {
      this.$http.get ( UserService.API_URL )
          .map ( response => response.json () )
          .catch ( err => {
            observer.error ( err );
            return Observable.throw ( err );
          } )
          .subscribe (
            userList => {
              // console.log ( response.json() );
              observer.next ( userList );
              observer.complete ();
            }
          );
    } );
  }

  getUser ( id: number ): Observable<UserDto> {
    return Observable.create ( observer => {

      const reqOpt: RequestOptions = new RequestOptions ();
      reqOpt.url                   = UserService.API_URL + id;
      reqOpt.method                = RequestMethod.Get;

      const params: URLSearchParams = new URLSearchParams ();
      params.set('token', 'saban ünlü');

      reqOpt.params = params;
/*
      const headers: Headers = new Headers();
      headers.append( 'auth', '1234');
      reqOpt.headers = headers;
      */


      const req: Request = new Request ( reqOpt );

      this.$http.request ( req )
          .map( response => response.json())
          .catch( err => {
            // observer.error ( err );
            observer.error (err);
            return Observable.throw ( err );
          })
          .subscribe(
            userList => {
              // console.log ( response.json() );
              observer.next( userList );
              observer.complete();
            }
          );

      // this.$http.get( UserService.API_URL + id )
      //     .map( response => response.json())
      //     .catch( err => {
      //       // observer.error ( err );
      //       observer.error (err);
      //       return Observable.throw ( err );
      //     })
      //     .subscribe(
      //       userList => {
      //         // console.log ( response.json() );
      //         observer.next( userList );
      //         observer.complete();
      //       }
      //     );

    } );
  }

  addUser ( payload: UserDto ): Observable<UserDto> {
    return Observable.create ( observer => {

      this.$http.post( UserService.API_URL, payload )
          .map( response => response.json())
          .catch( err => {
            // observer.error ( err );
            observer.error (err);
            return Observable.throw ( err );
          })
          .subscribe(
            userList => {
              // console.log ( response.json() );
              observer.next( userList );
              observer.complete();
            }
          );

    } );
  }

}
