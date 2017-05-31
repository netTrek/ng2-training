import { Injectable, InjectionToken, Inject } from '@angular/core';
import { IUser } from './jens/user/iuser';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/range';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromEvent';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Http, Request, RequestMethod, RequestOptions, URLSearchParams } from '@angular/http';

export const USER_REST_URL: InjectionToken<string> = new InjectionToken( 'user_api_url');

@Injectable ()
export class UserService {

  constructor ( private $http: Http, @Inject( USER_REST_URL ) private url: string ) {}

  getUserList (): Observable<Array<IUser>> {
    return this.handelReq<Array<IUser>> ( this.url );
  }

  getUserByID ( id: string ): Observable<IUser> {
    return this.handelReq<IUser> ( this.url + '/' + id );
  }

  private handelReq<T> ( url: string ): Observable<T> {
    const reqOpt: RequestOptions = new RequestOptions ();
    reqOpt.url                   = url;
    reqOpt.method                = RequestMethod.Get;

    const searchParams: URLSearchParams = new URLSearchParams ();
    searchParams.append ( 'token', 'saban ünlü' );

    reqOpt.search = searchParams;

    const req: Request = new Request ( reqOpt );

    return Observable.create (
      subject => {
        this.$http.request ( req )
            .map ( res => res.json () )
            .catch ( error => {
              subject.error ( error );
              return Observable.throw ( new Error ( error ) );
            } )
            .subscribe (
              user => {
                subject.next ( user );
                subject.complete ();
              }
            );
      }
    );
  }

}
