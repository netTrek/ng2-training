import { AfterContentInit, Component, ContentChild, ContentChildren, OnInit, QueryList } from '@angular/core';
import { UserComponent } from '../../jens/user/user.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterContentInit {

  @ContentChildren (UserComponent)
  users: QueryList<UserComponent>;

  seb: any[];

  constructor() { }

  ngOnInit() {
    console.log ( this.users, this.seb );
  }

  ngAfterContentInit (): void {
    console.log ( this.users );
  }
}
