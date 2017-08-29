import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  get selectedUsrInd (): number {
    return this._selectedUsrInd;
  }

  @Input()
  set selectedUsrInd ( value: number ) {
    this._selectedUsrInd = Number (value);
  }

  @Output ()
  setAsSelected: EventEmitter<number> = new EventEmitter();

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

  onClick () {
    this.setAsSelected.emit( this.usrInd );
  }

  ngOnInit () {
  }
}
