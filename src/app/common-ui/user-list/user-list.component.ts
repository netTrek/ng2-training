import {
  AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList,
  ViewChild
} from '@angular/core';
import { UserComponent } from '../user/user.component';
import { UserListHeaderComponent } from '../user-list-header/user-list-header.component';

@Component ( {
  selector   : 'pta-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : [ './user-list.component.css' ]
} )
export class UserListComponent implements OnInit, AfterContentInit, AfterViewInit {

  zumSpielen = '123 Test';
  zumSpielenHTML = '<strong>123</strong> Test';

  bildQuelle = './assets/images/logo-gross.png';
  bildInfo = 'logo von netTrek';

  breite = 300;

  /*
   @ContentChild ( UserComponent )
   user: UserComponent | undefined;

   @ContentChildren ( UserComponent )
   users: QueryList<UserComponent>;
   */

  @ViewChild ( UserListHeaderComponent )
  header: UserListHeaderComponent;

  @ViewChild ('subheader')
  subheader: ElementRef;

  fontcolor = 'red';

  constructor () {
  }

  ngOnInit () {
    console.log ( 'user list init' );
  }

  ngAfterViewInit (): void {
    console.log ( 'user list view init' );
    console.log ( this.header );
    console.log ( this.subheader );
    this.subheader.nativeElement.style.color = this.fontcolor;
  }

  ngAfterContentInit (): void {
     console.log ( 'user list content init' );
    /*
     if ( this.user === undefined ) {
     throw new Error ('User required');
     } else {
     this.user.username = 'saban';
     console.log ( this.user );
     }
     console.log ( this.users );
     */
  }

}
