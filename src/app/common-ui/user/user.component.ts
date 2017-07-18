import {
  AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChild,
  ViewChildren
} from '@angular/core';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserNameComponent } from './user-name/user-name.component';

@Component ( {
  selector   : 'app-user',
  templateUrl: './user.component.html',
  styleUrls  : [ './user.component.css' ]
} )
export class UserComponent implements OnInit, AfterViewInit  {

  get userList (): string[] {
    return this._userList;
  }

  @Input()
  set userList ( value: string[] ) {
    this._userList = [...value];
  }


  @Output()
  userListChange: EventEmitter<Array<string>> = new EventEmitter();

  private _userList: string[] = [];

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


  constructor () {
  }

  deleteUsr ( usrName: string ) {
    this.userList.splice( this.userList.indexOf( usrName ), 1 );
    this.userListChange.emit( [...this.userList] );
  }

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
