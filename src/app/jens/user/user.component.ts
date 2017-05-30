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

  constructor () {
  }


  ngOnInit () {
  }

  ngOnChanges ( changes: SimpleChanges ): void {
    console.log ( changes );
  }

}
