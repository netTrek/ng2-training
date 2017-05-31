import { Component } from '@angular/core';
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


import { Http, RequestOptions, Request, RequestMethod, URLSearchParams } from '@angular/http';

@Component ( {
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )
export class AppComponent {

  date: number = Date.now ();

  // newUser: IUser = {};

  title = 'saban works!';

  userlist: IUser[];

  constructor ( private $http: Http ) {

    const reqOpt: RequestOptions = new RequestOptions ();
    reqOpt.url = 'http://rest-api.flexlab.de/index.php/api/user';
    reqOpt.method = RequestMethod.Get;


    const searchParams: URLSearchParams = new URLSearchParams ();
    searchParams.append( 'token', 'saban ünlü');

    reqOpt.search = searchParams;

    const req: Request = new Request ( reqOpt );

    $http.request( req )
         .map ( res => res.json () )
         .catch ( error => {
           console.log ( error );
           return Observable.throw ( new Error ( error ) );
         } )
         .subscribe (
           user => this.userlist = user
         );
/*
    $http.get ( 'http://rest-api.flexlab.de/index.php/api/user/28' )
         .map ( res => res.json () )
         .catch ( error => {
           console.log ( error );
           return Observable.throw ( new Error ( error ) );
         } )
         .subscribe (
           user => console.log ( user )
         );
*/
  }

  onSubmit () {
    // this.userlist.push ( { ...this.newUser } );
  }
}
