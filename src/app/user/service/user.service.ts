import { Injectable } from '@angular/core';
import { DummyService } from './dummy.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { UserDto } from '../user-dto';
import { Http, Request, RequestMethod, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable ()
export class UserService {

  company$: BehaviorSubject<string> = new BehaviorSubject ( 'netTrek' );

  private _url = 'http://rest-api.flexlab.de/index.php/api/user';

  constructor ( private $http: Http ) {
    /*
    console.log ( $dummy );
    console.log ( 'creating USerService' );
    */
  }

  createUsr ( user: UserDto ): Observable<UserDto> {
    return this._handleReq<UserDto>( RequestMethod.Post, {user});
    // return Observable.create ( observer => {
    //   this.$http.post ( `ç`, usr )
    //       .map ( response => response.json () )
    //       .catch ( ( err ) => {
    //         return Observable.throw ( err );
    //       } )
    //       .subscribe (
    //         newUser => {
    //           observer.next ( newUser );
    //           observer.complete ();
    //         },
    //         error => {
    //           observer.error ( error );
    //         }
    //       );
    // } );
  }

  getUserById ( id: number ): Observable<UserDto> {
    return this._handleReq<UserDto>( RequestMethod.Get, {id});
    // return Observable.create ( observer => {
    //   this.$http.get ( `http://rest-api.flexlab.de/index.php/api/user/${id}` )
    //       .map ( response => response.json () )
    //       .catch ( ( err ) => {
    //         return Observable.throw ( err );
    //       } )
    //       .subscribe (
    //         user => {
    //           observer.next ( user );
    //           observer.complete ();
    //         },
    //         error => {
    //           observer.error ( error );
    //         }
    //       );
    // } );
  }

  getUsers (): Observable<UserDto[]> {
    return this._handleReq<UserDto[]>();
    // return Observable.create ( observer => {
    //   this.$http.get ( 'http://rest-api.flexlab.de/index.php/api/user' )
    //       .map ( response => response.json () )
    //       .catch ( ( err ) => {
    //         return Observable.throw ( err );
    //       } )
    //       .subscribe (
    //         userList => {
    //           observer.next ( userList );
    //           observer.complete ();
    //         },
    //         error => {
    //           observer.error ( error );
    //         }
    //       );
    // } );
  }

  private _handleReq<T> ( methode: RequestMethod = RequestMethod.Get, options?: { user?: UserDto, id?: number } ): Observable<T> {
    return Observable.create ( observer => {

      const reqOpt: RequestOptions = new RequestOptions ();

      reqOpt.method = methode;

      reqOpt.url = this._url;
      if ( ! ! options ) {
        if ( ! ! options.id ) {
          reqOpt.url = `${this._url}/${options.id}`;
        }
        if (!!options.user) {
          reqOpt.body = options.user;
        }
      }

      const req: Request = new Request ( reqOpt );

      this.$http.request ( req )
          .map ( response => response.json () )
          .catch ( ( err ) => {
            return Observable.throw ( err );
          } )
          .subscribe (
            result => {
              observer.next ( result );
              observer.complete ();
            },
            error => {
              observer.error ( error );
            }
          );

    } );
  }

  /*
    getUserList (): Observable<UserDto[]> {
      return Observable.create ( observer => {
        console.log ( 'get new list' );
        window.setTimeout ( () => {
          const users: UserDto[] = [];
          for ( let i = 0; i < 10; i ++ ) {
            users.push ( <UserDto> {
              firstname: `saban ${i}`,
              lastname : `uenlue ${i}`,
              age      : 22 + i,
              city     : `dorste ${i}`,
              zip      : `46282 - ${i}`
            } );
          }
          console.log ( 'return new list', users );
          observer.next( users );
          observer.complete();
        }, Math.floor ( Math.random () * 2000 ) );
      } );
    }
  */

}
