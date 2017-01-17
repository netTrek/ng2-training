import {Component, OnInit, AfterViewInit, ViewChild, ViewChildren, QueryList} from '@angular/core';
import {UserTitleComponent} from '../user-title/user-title.component';
import {UserComponent} from '../user/user.component';

@Component({
  selector: 'baywa-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit {

  @ViewChild(UserTitleComponent) userTitle : UserTitleComponent;
  @ViewChildren(UserComponent) users : QueryList<UserComponent>;

  prop : string = 'Eigenschaft';

  constructor() { }

  func ( a : number, b : number ) : number {
    return a + b;
  }

  ngOnInit() {
    console.info ( 'hier gibt es userTitle noch nicht');
  }

  ngAfterViewInit() : void {

    console.info ( 'hier gibt es userTitle', this.userTitle );
    console.info ( this.users );

  }
}
