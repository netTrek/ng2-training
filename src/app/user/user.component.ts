import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'audi-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name = 'Saban';

  constructor() { }

  clickHandler ( evt?: Event ) {
    console.log ('Hello World', evt );
    this.name = 'new name';
  }

  getName (): string {
    return 'Mein Name ist:= ' + this.name;
  }

  ngOnInit() {
  }

}
