import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { UserDto } from '../../model/user-dto';

@Component({
  selector: 'hb-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  private userList: UserDto[];
  private selectedUserDto: UserDto;

  constructor( private $userService: UserService ) {
  }


  selectUser ( userDto: UserDto ) {
    console.log ( 'user selected', userDto );
    this.selectedUserDto = userDto;
  }

  deleteUser ( ind: number ) {
    if ( confirm ( 'Willst du den User wirklich löschen ' ) ) {
      this.userList.splice ( ind, 1 );
      this.selectedUserDto = null;
    }
  }

  getClass ( even: boolean, user: UserDto ): string {
    if ( user === this.selectedUserDto ) {
      return 'selected';
    } else if ( even === true ) {
      return 'even';
    }
    return 'odd';
  }

  ngOnInit() {
    this.$userService.getUsers()
                .subscribe(
                  users => this.userList = users
                );
  }

}
