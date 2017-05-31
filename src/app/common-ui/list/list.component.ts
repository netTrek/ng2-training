
import { UserComponent } from '../../jens/user/user.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../../jens/user/iuser';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../user.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  username = 'Saban Ünlü';

  selected$: Observable<IUser>;

  @Input()
  userlist: IUser[];

  @Output()
  userlistChange: EventEmitter<Array<IUser>> = new EventEmitter();

  constructor( private $user: UserService ) { }

  selectUser ( userId: string ) {
    this.selected$ = this.$user.getUserByID( userId );
  }
  deleteUser ( user: IUser ) {
    this.userlist.splice( this.userlist.indexOf( user) , 1 );
  }

  ngOnInit() {
  }


}

