import { Injectable } from '@angular/core';
import {Http, RequestOptionsArgs, URLSearchParams} from '@angular/http';

import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

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

  userList: IUser[] = [];
  user: IUser;

  constructor( private http: Http ) { }

  getUsers () {
    this.http.get('http://rest-api.flexlab.de/index.php/api/user/')
      .map ( response => { return response.json(); } )
      .subscribe(
        result => this.userList = result
      );
  }

  getUser ( id: number ): Observable<IUser> {

    return Observable.create ( observer => {
      this.http.get('http://rest-api.flexlab.de/index.php/api/user/' + id )
        .map ( response => { return response.json(); } )
        .subscribe(
          result => {
            this.user = result;
            observer.next( result );
            observer.complete();
          }
        );
    });


  }

}
