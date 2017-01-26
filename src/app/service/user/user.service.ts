import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
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
    return this.$http.request( 'http://rest-api.flexlab.de/index.php/api/user' );
  }
}
