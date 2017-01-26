import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {
  constructor( private $http: Http  ) {
  }
  getUsers (): Observable<Response> {
    return this.$http.request( 'http://rest-api.flexlab.de/index.php/api/user' );
  }
}
