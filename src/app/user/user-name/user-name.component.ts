import { Component, Input, OnInit } from '@angular/core';
import { UserDto } from '../user-dto';

@Component({
  selector: 'msg-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.scss']
})
export class UserNameComponent implements OnInit {

  @Input()
  user: UserDto;

  constructor() { }

  ngOnInit() {
  }

}
