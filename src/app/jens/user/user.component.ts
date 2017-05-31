import { Component, EventEmitter, HostBinding, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IUser } from './iuser';
import { PointService } from '../../point.service';

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

  @Output()
  select: EventEmitter<string> = new EventEmitter( );

  constructor ( public $point: PointService ) {
  }

  @HostListener ('click', ['$event'] )
  doDel ( $event: MouseEvent ) {
    if ( $event.altKey ) {
      this.$point.point ++;
      this.select.emit( this.user.id );
    } else {
      this.delete.emit( this.user );
    }
  }


  ngOnInit () {
    // console.log ( 'user comp', this.$point );
  }

  ngOnChanges ( changes: SimpleChanges ): void {
    // console.log ( changes );
  }

}
