import {
  Component, OnInit, AfterViewInit, ViewChild, ViewChildren, QueryList, Input, Output,
  EventEmitter
} from '@angular/core';
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

  @Input()
  selectedInd: number = 1;
  @Output()
  selectedIndChange: EventEmitter<number> = new EventEmitter<number>();

  /*
   @Output()
   selectionChg: EventEmitter<number> = new EventEmitter<number> ();
   */

  userList: {first: string, last: string}[] = [
    {first: 'saban', last: 'ünlü'},
    {first: 'hans', last: 'müller'},
    {first: 'peter', last: 'meier'}
  ];

  constructor() {
  }

  clickHdl(selectedIndex: number, evt?: Event) {
    console.info(selectedIndex, evt);
    if (selectedIndex !== this.selectedInd) {
      this.selectedInd = selectedIndex;
      //this.selectionChg.emit ( selectedIndex );
      this.selectedIndChange.emit(selectedIndex);
    }
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
