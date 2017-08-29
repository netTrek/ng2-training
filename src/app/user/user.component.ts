import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';

@Component ( {
  selector   : 'msg-user',
  templateUrl: './user.component.html',
  // styles: [`
  //          h2 {
  //            color: red;
  //          }
  //          `]
  styleUrls  : [ './user.component.scss' ]
  // encapsulation: ViewEncapsulation.None
} )
export class UserComponent implements OnInit {

  // <div [class.selected]="selectedUsrInd===usrInd">

  @HostBinding ('class.selected')
  showSelectedClass = false;

  get selectedUsrInd (): number {
    return this._selectedUsrInd;
  }

  @Input ()
  set selectedUsrInd ( value: number ) {
    this._selectedUsrInd = Number ( value );
    this.showSelectedClass = this.selectedUsrInd === this.usrInd;
  }

  @Output ()
  setAsSelected: EventEmitter<number> = new EventEmitter ();

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

  constructor () {
  }

  @HostListener ('click')
  onClick () {
    this.setAsSelected.emit ( this.usrInd );
  }


  ngOnInit () {
  }
}
