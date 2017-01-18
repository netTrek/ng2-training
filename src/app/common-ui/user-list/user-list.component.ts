import {
  Component, OnInit, ViewChild, AfterViewInit, AfterContentInit, ViewChildren, QueryList,
  Input, Output, EventEmitter
} from '@angular/core';
import {UserComponent} from '../user/user.component';

@Component({
  selector: 'baywa-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit, AfterContentInit {

  @ViewChild(UserComponent)
  user: UserComponent;

  @ViewChildren(UserComponent)
  users: QueryList<UserComponent>;

  redClass: string = 'red';
  width: number = 100;
  imgUrl: string = 'https://placekitten.com/g/64/64';

  @Input()
  selectedInd: number = 0;

  @Output()
  selectedIndChange: EventEmitter<number> = new EventEmitter<number>() ;

  /*
  @Output()
  indChg: EventEmitter<number> = new EventEmitter<number>() ;
  */

  constructor() { }

  selectUsr ( ind: number, evt: Event ) {
    if ( ind !== this.selectedInd ) {
      this.selectedInd = ind;
      this.selectedIndChange.emit(ind);
      // this.indChg.emit(ind);
    }
    // console.log( evt );
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log ( '#', this.user, this.users );
    this.users.map( p_user => {
      console.log ( p_user );
    });
  }

  ngAfterContentInit(): void {
    // this.user.title.prop = '*';
  }
}
