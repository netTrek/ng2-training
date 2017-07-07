import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'pta-user-list-header',
  templateUrl: './user-list-header.component.html',
  styleUrls: ['./user-list-header.component.css']
})
export class UserListHeaderComponent implements OnInit, DoCheck {

  title = 'Mega Liste für User';

  constructor() { }

  ngOnInit() {
    console.log ( '# user list header init' );
  }

  ngDoCheck (): void {
    console.log ( '# user list header do check' );
  }
}
