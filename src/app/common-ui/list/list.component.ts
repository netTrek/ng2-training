
import { UserComponent } from '../../jens/user/user.component';
import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../jens/user/iuser';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  username = 'Saban Ünlü';

  // userlist: {username: string, age: number}[] = [

  @Input()
  userlist: IUser[];/* = [
    {
      username: 'saban',
      age: 12
    },
    {
      username: 'peter',
      age: 14
    },
    {
      username: 'franz',
      age: 15
    },
    {
      username: 'hans',
      age: 15
    }
  ];*/

  constructor() { }


  ngOnInit() {
  }


}

