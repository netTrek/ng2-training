import {
  AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, OnInit, Output, QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { UserHeaderComponent } from '../user-header/user-header.component';
import { UserComponent } from '../user.component';

@Component ( {
  selector   : 'msg-user-list',
  templateUrl: './user-list.component.html',
  styleUrls  : [ './user-list.component.scss' ]
} )
export class UserListComponent implements OnInit, AfterViewInit {

  @Output()
  disabledChange: EventEmitter<boolean> = new EventEmitter();

  get disabled (): boolean {
    return this._disabled;
  }

  @Input ()
  set disabled ( value: boolean ) {
    this._disabled = value.toString ()
                          .toLowerCase ()
                          .trim () === 'true';
    this.disabledChange.emit( this._disabled );
  }

  @ViewChild ( 'line' )
  lineRef: ElementRef;

  @ViewChild ( UserHeaderComponent )
  header: UserHeaderComponent;

  @ViewChildren ( UserComponent )
  users: QueryList<UserComponent>;

  selectedIUserInd: number | null = null;
  private _disabled               = false;

  toggle () {
    this.disabled = !this.disabled;
  }

  updateSelectedInd ( ind: number ) {

    if ( ! this.disabled ) {
      if ( this.selectedIUserInd === ind ) {
        this.selectedIUserInd = null;
      } else {
        this.selectedIUserInd = ind;
      }
    }

  }

  ngOnInit () {

  }

  ngAfterViewInit (): void {
    // throw new Error ( 'Method not implemented.' );

    console.log ( this.users, this.header, this.lineRef );

    this.lineRef.nativeElement.style.height = '5px';
  }

}
