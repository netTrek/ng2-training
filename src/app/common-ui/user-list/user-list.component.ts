import {
  Component, OnInit, AfterViewInit, ViewChild, ViewChildren, QueryList, Input, Output,
  EventEmitter
} from '@angular/core';
import {UserTitleComponent} from '../user-title/user-title.component';
import {UserComponent} from '../user/user.component';
import {Http} from '@angular/http';

export interface IUser {
  id: string;
  firstname: string;
  lastname: string;
  birthday: string;
  street: string;
  street_no?: any;
  zip?: any;
  city?: any;
}

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

  userList: IUser[];

  constructor( http: Http ) {


    http.get('http://rest-api.flexlab.de/index.php/api/user/')
      .subscribe(
        respone => {
            this.userList = respone.json();
        }
      );
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
