import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList } from '@angular/core';
import { UserNameComponent } from './user-name/user-name.component';

@Component({
  selector: 'hb-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, AfterContentInit {

  @ContentChild ( UserNameComponent )
  userName: UserNameComponent;

  @ContentChildren ( UserNameComponent )
  userNames: QueryList<UserNameComponent>;
/*
  !!!!!! SO NIE !!!!!!
  constructor( elem: ElementRef ) {
    console.log ( elem );
    elem.nativeElement.getElementsByTagName( 'hb-user-name' );
  }
*/

  constructor () {}

  ngOnInit() {
  }

  ngAfterContentInit (): void {
    console.log( 'alle content inhalte init', this.userName, this.userNames );
  }
}
