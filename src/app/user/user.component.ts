import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, HostListener, Input, OnChanges, OnInit, Output,
  SimpleChanges
} from '@angular/core';
import { UserDto } from './user-dto';
import { UserService } from './service/user.service';

@Component ( {
  selector   : 'msg-user',
  templateUrl: './user.component.html',
  // styles: [`
  //          h2 {
  //            color: red;
  //          }
  //          `]
  styleUrls  : [ './user.component.scss' ]/*,
  changeDetection: ChangeDetectionStrategy.OnPush*/
  // encapsulation: ViewEncapsulation.None
} )
export class UserComponent implements OnInit, OnChanges {

  // <div [class.selected]="selectedUsr===usr">

  @HostBinding ('class.selected')
  showSelectedClass = false;
  /*
  @HostBinding ('style.color')
  fontColor = 'red';
  */

  get selectedUsr (): UserDto {
    return this._selectedUsr;
  }

  @Input ()
  set selectedUsr ( value: UserDto ) {
    this._selectedUsr = value ;
    this.showSelectedClass = this.selectedUsr === this.usr;
  }

  @Output ()
  setAsSelected: EventEmitter<UserDto> = new EventEmitter ();

  @Output ()
  deleteUsr: EventEmitter<UserDto> = new EventEmitter ();

  get usr (): UserDto {
    return this._usr;
  }

  @Input ()
  set usr ( value: UserDto ) {
    this._usr = value ;
  }

  private _usr: UserDto;
  private _selectedUsr: UserDto;

  // private _isSelected = false;

  constructor ( private _cdr: ChangeDetectorRef, public $user: UserService) {
    console.log ( 'usrService in userComp', this.$user );
  }

  @HostListener ('click')
  onClick () {
    this.setAsSelected.emit ( this.usr );
  }

  @HostListener ('dblclick')
  onDblClick () {
    this.deleteUsr.emit ( this.usr );
  }


  ngOnChanges ( changes: SimpleChanges ): void {
    // throw new Error ( 'Method not implemented.' );
    // console.log ( changes );
    // if ( !! changes.selectedUsr ) {
    //   console.log( 'selectedUsr has changed' );
    //   this._cdr.detectChanges();
    // }
  }


  ngOnInit () {
  }
}
