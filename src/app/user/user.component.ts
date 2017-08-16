import {
  AfterViewInit, /*AfterContentInit,*/ Component, ElementRef, EventEmitter, HostBinding, HostListener, Input,
  OnChanges, /*ContentChild, ContentChildren, ElementRef,*/
  OnInit,
  Output,
  QueryList, SimpleChanges, ViewChild
} from '@angular/core';
import { UserNameComponent } from './user-name/user-name.component';
import { UserDto } from '../model/user-dto';

@Component ( {
  selector   : 'hb-user',
  templateUrl: './user.component.html',
  styleUrls  : [ './user.component.scss' ]
} )
export class UserComponent implements OnInit/*, AfterContentInit*/, AfterViewInit, OnChanges {

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

  @Input ()
  user: UserDto;

  @Output ()
  selectUsr: EventEmitter<UserDto> = new EventEmitter ();

  @ViewChild ( UserNameComponent )
  userName: UserNameComponent;

  /*
    @ViewChild ( 'usrheader' )
    userHeader: ElementRef;
  */

  constructor () {
  }

  // [style.color]="color"
  @HostBinding ( 'style.color' )
  color = undefined;

  // [style.background-color]="color"
  @HostBinding ( 'style.backgroundColor' )
  bgcolor = undefined;

  // (mouseenter)="enter()"
  @HostListener ( 'mouseenter' )
  enter ( evt?: Event ) {
    this.color   = 'red';
    this.bgcolor = 'yellow';
  }

  // (mouseleave)="leave()"
  @HostListener ( 'mouseleave' )
  leave ( evt?: Event ) {
    this.color   = undefined;
    this.bgcolor = undefined;
  }

  @HostListener ( 'click', [ '$event' ] ) // <hb-user (click)="methode($event)"
  setAsSelected ( evt?: MouseEvent ) {
    console.log ( evt );
    // console.log ( 'set this user', this.user, 'as selected' );
    this.selectUsr.next ( this.user );
  }

  ngOnChanges ( changes: SimpleChanges ): void {
    console.log ( changes );
  }

  ngOnInit () {
  }

  /*
    ngAfterContentInit (): void {
      console.log( 'alle content inhalte init', this.userName, this.userNames );
    }
    */

  ngAfterViewInit (): void {
    /*
      console.log( 'alle template-inhalte init', this.userName/!*, this.userNames*!/ );
      console.log ( this.userHeader );
      this.userHeader.nativeElement.style.color = 'red';
    */
  }
}
