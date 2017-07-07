import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export interface IUserService {
  name: string;
}

export interface IUser {
  id: string;
  firstname: string;
  lastname: string;
  birthday: string;
  street: string;
  street_no: string;
  zip: string;
  city: string;
}

@Injectable ()
export class UserService implements IUserService {

  name = 'Peter';
  age  = 41;

  private uid: number = Date.now ();

  constructor ( public $http: Http ) {
    // console.log ( this.uid, http  );
  }

  getUsers (): Observable<IUser[]> {
    return Observable.create ( observer => {
      this.$http.get ( 'http://rest-api.flexlab.de/index.php/api/user/' )
          .subscribe (
            response => {
              observer.next ( response.json () );
              observer.complete ();
            }
          );
    } );

  }

  getAge (): number {
    return this.age;
  }

}
