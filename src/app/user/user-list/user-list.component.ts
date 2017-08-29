import { AfterContentInit, Component, ContentChild, ContentChildren, OnInit, QueryList } from '@angular/core';
import { UserHeaderComponent } from '../user-header/user-header.component';
import { UserComponent } from '../user.component';

@Component({
  selector: 'msg-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterContentInit {

  @ContentChild (UserHeaderComponent)
  header: UserHeaderComponent;

  @ContentChildren(UserComponent)
  users: QueryList<UserComponent>

  constructor() {}

  ngOnInit() {
  }

  ngAfterContentInit (): void {
    console.log ( this.header );
    console.log ( this.users );
  }
}
