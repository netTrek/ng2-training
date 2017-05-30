import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnChanges {

  @Output()
  userNameChange: EventEmitter<string> = new EventEmitter();

  @Input()
  get userName (): string {
    return this._userName;
  }
  set userName ( value: string ) {
    this._userName = value;
  }
  private _userName: string;



  constructor() { }

  chageTheName() {
    this.userName = 'superman';
    this.userNameChange.next( this.userName );
  }

  ngOnInit() {
  }

  ngOnChanges ( changes: SimpleChanges ): void {
    console.log ( changes );
  }

}
