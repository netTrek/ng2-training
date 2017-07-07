import {
  AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, DoCheck, ElementRef, HostListener, OnInit, QueryList,
  ViewChild
} from '@angular/core';
import { UserComponent } from '../user/user.component';
import { UserListHeaderComponent } from '../user-list-header/user-list-header.component';

@Component ( {
  selector   : 'pta-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : [ './user-list.component.css' ]
} )
export class UserListComponent implements OnInit, DoCheck {

  crrUserName = 'Heike';
  fontColor = 'red';

  constructor () {
  }

  ngOnInit() {
    console.log ( '#### user list init' );
  }

  ngDoCheck (): void {
    console.log ( '#### user list do check' );
  }

  userClick( mouseEvt: MouseEvent ) {
    console.log ('user was clicked', mouseEvt);
    this.crrUserName = 'event ' + mouseEvt.clientX;
  }

  handelNameChg ( name: string ) {
    console.log ( 'select the user with name := ' + name );
  }


}
