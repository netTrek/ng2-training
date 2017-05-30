import {
  AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, OnDestroy, OnInit, QueryList, ViewChild,
  ViewChildren
} from '@angular/core';
import { UserComponent } from '../../jens/user/user.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {

  username = 'Saban Ünlü';

  /*
  @ContentChildren (UserComponent)
  users: QueryList<UserComponent>;
  seb: any[];
  */

  @ViewChild ('userHeader')
  userHeader: ElementRef;

  @ViewChild (UserComponent)
  user: UserComponent;

  @ViewChildren (UserComponent)
  users: QueryList<UserComponent>;


  private clickHandler: Function;

  constructor() { }

  onBtnClick ( evt: MouseEvent ) {
    console.log ( 'btn clicked', evt );
  }

  ngOnInit() {
    // console.log ( this.users, this.seb );
  }

  ngAfterContentInit (): void {
    // console.log ( this.users );
  }

  ngAfterViewInit (): void {
    console.log ( this.user,  this.users, this.userHeader  );
    this.addListenerToH2 ();
  }

  ngOnDestroy (): void {
    this.userHeader.nativeElement.removeEventListener( 'click', this.clickHandler );
  }

  private addListenerToH2 () {

    this.clickHandler = () => {
      console.log( 'h2 clicked ');
    };
    this.userHeader.nativeElement.addEventListener( 'click', this.clickHandler );
  }


}
