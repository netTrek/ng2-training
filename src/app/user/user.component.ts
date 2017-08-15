import {
  AfterViewInit, /*AfterContentInit,*/ Component, ElementRef, Input, /*ContentChild, ContentChildren, ElementRef,*/ OnInit,
  QueryList, ViewChild
} from '@angular/core';
import { UserNameComponent } from './user-name/user-name.component';
import { UserDto } from '../model/user-dto';

@Component({
  selector: 'hb-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit/*, AfterContentInit*/ , AfterViewInit {

  /*

    @ContentChild ( UserNameComponent )
    userName: UserNameComponent;

    @ContentChildren ( UserNameComponent )
    userNames: QueryList<UserNameComponent>;
  */

/*
  !!!!!! SO NIE !!!!!!
  constructor( elem: ElementRef ) {
    console.log ( elem );
    elem.nativeElement.getElementsByTagName( 'hb-user-name' );
  }
*/

  @Input()
  user: UserDto;

  @ViewChild ( UserNameComponent )
  userName: UserNameComponent;

  @ViewChild ( 'usrheader' )
  userHeader: ElementRef;

  constructor () {}

  ngOnInit() {
  }
/*
  ngAfterContentInit (): void {
    console.log( 'alle content inhalte init', this.userName, this.userNames );
  }
  */

  ngAfterViewInit (): void {
    console.log( 'alle template-inhalte init', this.userName/*, this.userNames*/ );
    console.log ( this.userHeader );
    this.userHeader.nativeElement.style.color = 'red';
  }
}
