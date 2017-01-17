import {Component, OnInit, ContentChild, AfterContentInit} from '@angular/core';
import {UserTitleComponent} from '../user-title/user-title.component';

@Component({
  selector: 'baywa-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterContentInit {

  @ContentChild(UserTitleComponent) userTitle : UserTitleComponent;


  constructor() { }

  ngOnInit() {
    console.info ( 'hier gibt es userTitle noch nicht', this.userTitle );
  }

  ngAfterContentInit() : void {
    console.info ( 'hier gibt es userTitle', this.userTitle );
  }
}
