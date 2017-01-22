import {
  Component, OnInit, ViewChild, AfterViewInit, AfterContentInit, ViewChildren, QueryList,
  Input, Output, EventEmitter, OnChanges, SimpleChanges
} from '@angular/core';
import {UserComponent} from '../user/user.component';
import {ReversePipe} from '../reverse.pipe';
import {IUser, UserService} from '../user.service';
import {Observable} from 'rxjs';



@Component({
  selector: 'baywa-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit, AfterContentInit, OnChanges {


  @ViewChild(UserComponent)
  user: UserComponent;

  @ViewChildren(UserComponent)
  users: QueryList<UserComponent>;

  redClass: string = 'red';
  width: number = 100;
  imgUrl: string;

  @Input()
  selectedInd: number = 1;

  @Output()
  selectedIndChange: EventEmitter<number> = new EventEmitter<number>() ;

  users$: Observable<Array<IUser>>;

  constructor( private $user: UserService ) {

  }

  selectUsr ( ind: number|IUser, evt: Event ) {

    if ( typeof ind !== 'number') {
      this.$user.updateUser( Object.assign( {}, ind ) );
      ind = (<IUser>ind).id;
    }

    if ( ind !== this.selectedInd ) {
      this.selectedInd = ind;
      this.selectedIndChange.emit(ind);
      if ( ind === 1 ) {
        this.imgUrl = 'https://placekitten.com/g/64/64';
      } else {
        this.imgUrl = undefined;
      }


      // this.indChg.emit(ind);
    }
    // console.log( evt );
  }

  ngOnInit() {
    /*
    const reverse: ReversePipe = new ReversePipe ();
    console.log( reverse.transform( '123' ) );
    console.log( reverse.transform( 123 ) );
    */

    // this.$user.getUsers();

    this.users$ = this.$user.getUsers();
    this.users$.subscribe(
      result => console.warn( result )
    );

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.warn ( 'changes', changes );
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
