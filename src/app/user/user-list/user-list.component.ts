import {
  AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList, ViewChild,
  ViewChildren
} from '@angular/core';
import { UserHeaderComponent } from '../user-header/user-header.component';
import { UserComponent } from '../user.component';

@Component({
  selector: 'msg-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit {


  @ViewChild ( 'line' )
  lineRef: ElementRef;

  @ViewChild ( UserHeaderComponent )
  header: UserHeaderComponent;

  @ViewChildren ( UserComponent )
  users: QueryList<UserComponent>;

  constructor() {}

  ngOnInit() {

  }

  ngAfterViewInit (): void {
    // throw new Error ( 'Method not implemented.' );

    console.log ( this.users, this.header, this.lineRef );

    this.lineRef.nativeElement.style.height = '5px';
  }

}
