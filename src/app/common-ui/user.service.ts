import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

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

  constructor( private http: Http ) { }

  getUsers () {
    this.http.get('http://rest-api.flexlab.de/index.php/api/user/')
      .subscribe(
        respone => {
          this.userList = respone.json();
        }
      );
  }

}
