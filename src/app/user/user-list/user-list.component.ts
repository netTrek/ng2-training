import {
  AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, OnInit, Output, QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { UserHeaderComponent } from '../user-header/user-header.component';
import { UserComponent } from '../user.component';
import { UserDto } from '../user-dto';
import { UserService } from '../service/user.service';

@Component ( {
  selector   : 'msg-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : [ './user-list.component.scss' ]
} )
export class UserListComponent implements OnInit, AfterViewInit {

  get usersList (): UserDto[] {
    return this._usersList;
  }

  @Input ()
  set usersList ( value: UserDto[] ) {
    if ( !!value && this._original === null ) {
      this._original = value; // referenz;
    }
    this._usersList = [ ...value ];
  }

  @Output ()
  disabledChange: EventEmitter<boolean> = new EventEmitter ();

  get disabled (): boolean {
    return this._disabled;
  }

  @Input ()
  set disabled ( value: boolean ) {
    this._disabled = value.toString ()
                          .toLowerCase ()
                          .trim () === 'true';
    this.disabledChange.emit ( this._disabled );
  }

  @ViewChild ( 'line' )
  lineRef: ElementRef;

  @ViewChild ( UserHeaderComponent )
  header: UserHeaderComponent;

  @ViewChildren ( UserComponent )
  users: QueryList<UserComponent>;

  // selectedIUserInd: number | null = null;

  selectedUser: UserDto | null  = null;
  private _disabled             = false;
  private _usersList: UserDto[] = [];
  private _original: UserDto[] | null = null;

  constructor ( public $user: UserService ) {
    console.log ( $user.company$ );
    $user.company$.subscribe( next => console.log ( 'new val', next ));
  }

  updateCompany () {
    this.$user.company$.next( '.msg' );
  }

  toggle () {
    this.disabled = ! this.disabled;
  }

  deleteUsrWith ( usr: UserDto ) {
    if ( confirm ( `soll der user mit der id ${usr.firstname} ${usr.lastname} wirklich gelöscht werden?` ) ) {
      const ind = this.usersList.indexOf ( usr );
      if ( ind !== - 1 ) {
        this.usersList.splice ( ind, 1 );
      }
    }
  }

  updateSelected ( usr: UserDto ) {

    if ( ! this.disabled ) {
      if ( this.selectedUser === usr ) {
        this.selectedUser = null;
      } else {
        this.selectedUser = usr;
      }
    }

  }

  ngOnInit () {
    console.log ( this.usersList );
  }

  ngAfterViewInit (): void {
    // throw new Error ( 'Method not implemented.' );

    console.log ( this.users, this.header, this.lineRef );

    this.lineRef.nativeElement.style.height = '5px';
  }

}
