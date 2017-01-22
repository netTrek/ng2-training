import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable, BehaviorSubject} from 'rxjs';

export interface IUser {
  id: number;
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

  private _usersObservable: Observable<Array<IUser>>;
  private _userObservable: Observable<IUser>;

  usersSubject: BehaviorSubject<Array<IUser>> = new BehaviorSubject<Array<IUser>> ( null );
  userSubject: BehaviorSubject<IUser> = new BehaviorSubject<IUser> ( null );

  get usersObservable(): Observable<Array<IUser>> {
    if ( ! this._usersObservable ) {
      this._usersObservable = this.usersSubject.asObservable();
    }
    return this._usersObservable;
  }

  get userObservable(): Observable<IUser> {
    if ( ! this._userObservable ) {
      this._userObservable = this.userSubject.asObservable();
    }
    return this._userObservable;
  }

  user: IUser;
  userList: IUser[];


  constructor( private $http: Http ) {

  }

  updateUser ( user: IUser ) {
    user.firstname = '#' + user.firstname;

    const crrUsrList: IUser[] = this.usersSubject.getValue();
    crrUsrList.forEach( (usr: IUser ) => {
      if ( usr.id === user.id ) {
        usr = Object.assign( usr, user );
      }
    });

    this.usersSubject.next( crrUsrList );

  }

  getUser ( id: number ): Observable<IUser> {

    this.$http.get( 'http://rest-api.flexlab.de/index.php/api/user/' + id )
      .map ( response => response.json() )
      .subscribe(
        result => {
          // console.warn ( 'loaded', result );
          this.user = result;
          this.userSubject.next( result );
        },
        error => {
          console.warn ( 'error', error );
          this.userSubject.error( error );
        }
      );

    return this.userObservable;
  }

  getUsers (): Observable<Array<IUser>> {

    this.$http.get( 'http://rest-api.flexlab.de/index.php/api/user/' )
      .map ( response => response.json() )
      .subscribe(
        result => {
          this.userList = result;
          this.usersSubject.next( result );
        },
        error => {
          console.warn ( 'error', error );
          this.usersSubject.error( error );
        }
      );

    return this.usersObservable;

  }

}
