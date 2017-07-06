import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'pta-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }


}
