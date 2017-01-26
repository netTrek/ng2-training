import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestMethod, Request, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

export interface IUser {
  id: string;
  firstname: string;
  lastname: string;
  birthday: string;
  street: string;
  street_no?: any;
  zip?: any;
  city?: any;
}


@Injectable()
export class UserService {
  constructor( private $http: Http  ) {
  }
  getUsers (): Observable<Response> {

    const reqOpt: RequestOptions = new RequestOptions ();
    reqOpt.url = 'http://rest-api.flexlab.de/index.php/api/user';
    reqOpt.method = RequestMethod.Get;

    const searchParams: URLSearchParams = new URLSearchParams ();
    searchParams.append( 'token', 'netTrek' ) ;

    reqOpt.search = searchParams;

    const req: Request = new Request (reqOpt);


    return this.$http.request( req );

  }

  getUser ( id: number ): Observable<Response> {
    return this.$http.get ( 'http://rest-api.flexlab.de/index.php/api/user/' + id );
  }
}
