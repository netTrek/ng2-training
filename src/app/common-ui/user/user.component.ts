import {
  Component, OnInit, ViewEncapsulation, ContentChild, AfterContentInit, ContentChildren,
  QueryList
} from '@angular/core';
import {UserTitleComponent} from "../user-title/user-title.component";

@Component({
  selector: 'baywa-user',
  template: `
  <h3>User: <ng-content select="baywa-user-title"></ng-content> <ng-content></ng-content></h3>
`,
  styles: [`
          :host {
                color: red;
            }
    `],
  encapsulation: ViewEncapsulation.Emulated
})
export class UserComponent implements OnInit, AfterContentInit {

  @ContentChild(UserTitleComponent) title : UserTitleComponent;
  //@ContentChildren(UserTitleComponent) titles : QueryList<UserTitleComponent>;

  constructor() {
  }

  ngOnInit() {
    console.info('hier gibt es das Element noch nicht');
  }

  ngAfterContentInit() : void {

    console.info('hier gibt es das Element', this.title);
    this.title.prop = '*';
    /*
    console.info ( this.titles );
    this.titles.map( title => {
      title.prop = '#';
    });
    */
  }
}
