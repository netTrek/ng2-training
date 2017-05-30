
import { UserComponent } from '../../jens/user/user.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../../jens/user/iuser';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  username = 'Saban Ünlü';

  @Input()
  userlist: IUser[];

  @Output()
  userlistChange: EventEmitter<Array<IUser>> = new EventEmitter();

  constructor() { }

  deleteUser ( user: IUser ) {
    this.userlist.splice( this.userlist.indexOf( user) , 1 );
  }

  ngOnInit() {
  }


}

