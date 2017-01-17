import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
