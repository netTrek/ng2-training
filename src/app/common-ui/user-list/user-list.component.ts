import {
  Component, EventEmitter, Input, OnInit, Output
} from '@angular/core';

@Component ( {
  selector   : 'pta-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : [ './user-list.component.css' ]
} )
export class UserListComponent implements OnInit {

  @Input()
  selectedUser: string|undefined;

  @Output()
  selectedUserChange: EventEmitter<string> = new EventEmitter();

  @Input()
  userName1 = 'John Doo';

  @Input()
  userName2: string|undefined;

  @Input()
  header: string|undefined;

  constructor () {
  }

  updateSelection ( name: string ) {
    this.selectedUser = name;
    this.selectedUserChange.emit( this.selectedUser);
  }

  ngOnInit() {
  }

}
