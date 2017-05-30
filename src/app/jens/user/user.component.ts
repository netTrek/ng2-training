import { Component, EventEmitter, HostBinding, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IUser } from './iuser';

@Component ( {
  selector   : 'app-user',
  templateUrl: './user.component.html',
  styleUrls  : [ './user.component.scss' ]
} )
export class UserComponent implements OnInit, OnChanges {


  @Input ()
  user: IUser;

  @Output()
  delete: EventEmitter<IUser> = new EventEmitter( );

  constructor () {
  }

  @HostListener ('click')
  doDel () {
    this.delete.emit( this.user );
  }


  ngOnInit () {
  }

  ngOnChanges ( changes: SimpleChanges ): void {
    // console.log ( changes );
  }

}
