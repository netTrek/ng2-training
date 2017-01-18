import {
  Component, OnInit, ViewEncapsulation, ContentChild, AfterContentInit, ContentChildren,
  QueryList, HostBinding, HostListener
} from '@angular/core';
import {UserTitleComponent} from '../user-title/user-title.component';

@Component({
  selector: 'baywa-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class UserComponent implements OnInit, AfterContentInit {

  @ContentChild(UserTitleComponent)
  title: UserTitleComponent;

  @HostBinding('class.underlined')
  underlined: boolean = false;

  @HostListener ('mouseenter', ['$event'] )
  enterHandler ( evt: Event ) {
    console.log ( evt );
    this.underlined = true;
  }

  @HostListener ('mouseleave')
  leaveHandler () {
    this.underlined = false;
  }


  private _titles: QueryList<UserTitleComponent>;

  @ContentChildren(UserTitleComponent)
  set titles ( p_titles: QueryList<UserTitleComponent> ) {
    this._titles = p_titles;

    p_titles.map ( title => {
      // title.prop = '#1';
    });

  }
  get titles (): QueryList<UserTitleComponent> {
    return this._titles;
  }


  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    console.log ( this.title, this.titles );
    // this.title.prop = 'ng2 Rocks';
    /*
    this.titles.map ( title => {
      title.prop = '#';
    });
    */

  }

}
