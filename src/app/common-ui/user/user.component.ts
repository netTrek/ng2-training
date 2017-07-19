import {
  AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChild,
  ViewChildren
} from '@angular/core';

import { UserHeaderComponent } from './user-header/user-header.component';
import { UserNameComponent } from './user-name/user-name.component';
import { IUser } from '../services/iuser';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component ( {
  selector   : 'app-user',
  templateUrl: './user.component.html',
  styleUrls  : [ './user.component.css' ]
} )
export class UserComponent implements OnInit, AfterViewInit  {

  get userList (): IUser[] {
    return this._userList;
  }

  @Input()
  set userList ( value: IUser[] ) {
    if ( !! value && value.length > 0 ) {
      this._userList = [...value];
    }
  }

  @Output()
  userListChange: EventEmitter<Array<string>> = new EventEmitter();

  user: Observable<IUser>;

  private _userList: IUser[] = [];

  /*

  @ViewChild ( UserHeaderComponent )
  header: UserHeaderComponent;

  @ViewChild ( UserNameComponent )
  name: UserNameComponent;

  @ViewChild ( 'title' )
  title: ElementRef;

  @ViewChildren ( UserNameComponent )
  names: QueryList<UserNameComponent>;
*/


  constructor ( private $user: UserService, private router: Router )  {
  }

  selectedUsr ( usr: IUser ) {
    // console.log ( 'selected usr is', usr );
    // this.user = this.$user.getUserbyID( usr.id );
    this.router.navigate( ['detail', usr.id ] );
  }

/*
  deleteUsr ( usrName: string ) {
    this.userList.splice( this.userList.indexOf( usrName ), 1 );
    this.userListChange.emit( [...this.userList] );
  }

  deleteUsrByIndex ( ind: number ) {
    console.log ( 'index des users: ', ind );
    this.userList.splice( ind, 1 );
    this.userListChange.emit( [...this.userList] );
  }
  */

  ngOnInit () {
    /*
    setTimeout( ()=> {
        this.userList = ['frank','heinz'];
    }, 6000 );
    */
  }

  ngAfterViewInit (): void {
    /*
    console.log ( this.header, this.name );
    console.log ( this.names.toArray() );
    console.log ( this.title );
    this.title.nativeElement.style.color = 'red';
    */
  }

}
