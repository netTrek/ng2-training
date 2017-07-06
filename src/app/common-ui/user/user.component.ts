import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pta-user',
  templateUrl: './user.component.html',
  styles: [`
    :host {
      display: inline-block;
      background-color: #ffe31b;
      color: red;
    }
    .spielen {
      color: black;
    }
  `]
})
export class UserComponent implements OnInit,
OnChanges {

  @Input()
  username = 'Peter Müller';

  @Output()
  nameChg: EventEmitter<string> = new EventEmitter();

  constructor() { }

  chgUsername() {
    this.username = 'test';
    this.nameChg.emit( this.username );
  }

  ngOnInit() {
    console.log ( '#### user comp init' );
  }

  ngOnChanges ( changes: SimpleChanges ): void {
     console.log ( 'chg', changes );
  }
}
