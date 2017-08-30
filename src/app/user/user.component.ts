import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, HostListener, Input, OnChanges, OnInit, Output,
  SimpleChanges
} from '@angular/core';

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

  // <div [class.selected]="selectedUsrInd===usrInd">

  @HostBinding ('class.selected')
  showSelectedClass = false;
  /*
  @HostBinding ('style.color')
  fontColor = 'red';
  */

  get selectedUsrInd (): number {
    return this._selectedUsrInd;
  }

  @Input ()
  set selectedUsrInd ( value: number ) {
    this._selectedUsrInd = Number ( value );
    this.showSelectedClass = this.selectedUsrInd === this.usrInd;
    /*
    if ( this.showSelectedClass ) {
      this.fontColor = 'blue';
    }
    */
  }

  @Output ()
  setAsSelected: EventEmitter<number> = new EventEmitter ();

  @Output ()
  deleteUsrInd: EventEmitter<number> = new EventEmitter ();

  /*
    get isSelected (): boolean {
      return this._isSelected;
    }
    @Input ()
    set isSelected ( value: boolean ) {
      this._isSelected = value.toString ()
                              .toLowerCase ()
                              .trim () === 'true';
    }
  */
  get usrInd (): number {
    return this._usrInd;
  }

  @Input ()
  set usrInd ( value: number ) {
    this._usrInd = Number ( value );
  }

  private _usrInd: number;
  private _selectedUsrInd: number;

  // private _isSelected = false;

  constructor ( private _cdr: ChangeDetectorRef ) {
  }

  @HostListener ('click')
  onClick () {
    this.setAsSelected.emit ( this.usrInd );
  }

  @HostListener ('dblclick')
  onDblClick () {
    this.deleteUsrInd.emit ( this.usrInd );
  }


  ngOnChanges ( changes: SimpleChanges ): void {
    // throw new Error ( 'Method not implemented.' );
    // console.log ( changes );
    // if ( !! changes.selectedUsrInd ) {
    //   console.log( 'selectedUsrInd has changed' );
    //   this._cdr.detectChanges();
    // }
  }


  ngOnInit () {
  }
}
