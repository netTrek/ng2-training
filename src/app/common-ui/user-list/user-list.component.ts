import {Component, OnInit, AfterViewInit, ViewChild, ViewChildren, QueryList, Input} from '@angular/core';
import {UserTitleComponent} from '../user-title/user-title.component';
import {UserComponent} from '../user/user.component';

@Component({
  selector: 'baywa-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit {

  @ViewChild(UserTitleComponent) userTitle: UserTitleComponent;
  @ViewChildren(UserComponent) users: QueryList<UserComponent>;

  @Input( 'selected-usr' ) selectedInd: number = 1;

  constructor() {
  }

  clickHdl(selectedIndex: number, evt?: Event) {
    console.info(selectedIndex, evt);
    this.selectedInd = selectedIndex;
  }

  makeGreen(): string {
    return 'green';
  }

  func(a: number, b: number): number {
    return a + b;
  }

  ngOnInit() {
    console.info('hier gibt es userTitle noch nicht');
  }

  ngAfterViewInit(): void {

    console.info('hier gibt es userTitle', this.userTitle);
    console.info(this.users);

  }
}
