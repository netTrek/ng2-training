import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserNameComponent } from './user-name/user-name.component';

@Component ( {
  selector   : 'app-user',
  templateUrl: './user.component.html',
  styleUrls  : [ './user.component.css' ]
} )
export class UserComponent implements OnInit, AfterViewInit  {

  userList: string[] = ['peter', 'hans', 'saban', 'heike'];




  /*

  @ViewChild ( UserHeaderComponent )
  header: UserHeaderComponent;

  @ViewChild ( UserNameComponent )
  name: UserNameComponent;

  @ViewChild ( 'title' )
  title: ElementRef;

  @ViewChildren ( UserNameComponent )
  names: QueryList<UserNameComponent>;
*/


  constructor () {
  }

  ngOnInit () {
    /*
    setTimeout( ()=> {
        this.userList = ['frank','heinz'];
    }, 6000 );
    */
  }

  ngAfterViewInit (): void {
    /*
    console.log ( this.header, this.name );
    console.log ( this.names.toArray() );
    console.log ( this.title );
    this.title.nativeElement.style.color = 'red';
    */
  }

}
