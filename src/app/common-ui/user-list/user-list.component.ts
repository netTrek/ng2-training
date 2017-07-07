import {
  Component, EventEmitter, Input, OnInit, Output
} from '@angular/core';
import { IUser } from '../../service/user.service';

@Component ( {
  selector   : 'pta-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : [ './user-list.component.css' ]
} )
export class UserListComponent implements OnInit {

  @Input ()
  selectedUser: string | undefined;

  @Output ()
  selectedUserChange: EventEmitter<string> = new EventEmitter ();

  @Input ()
  users: IUser[];

  /*
   @Input()
   userName1 = 'John Doo';

   @Input()
   userName2: string|undefined;
   */

  @Input ()
  header: string | undefined;

  constructor () {
  }

  updateSelection ( name: string ) {
    this.selectedUser = name;
    this.selectedUserChange.emit ( this.selectedUser );
  }
/*
  delUser ( name: string ) {
    this.users.splice( this.users.indexOf(name), 1 );
  }
  */

  ngOnInit () {
  }

}
