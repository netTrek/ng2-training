import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'audi-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  name = 'Saban';

  @Output()
  nameChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  clickHandler ( evt?: Event ) {
    console.log ('Hello World', evt );
    this.name = 'new name';
    this.nameChange.emit( this.name );
  }

  getName (): string {
    return 'Mein Name ist:= ' + this.name;
  }


  ngOnInit() {
  }

}
