import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `<strong>Hello User</strong>
  <p>Lorem ipsum dolor sit amet, consectetur</p>`,
  styles: [`
    :host {
      background-color: azure;
      display: inline-block;
    }
    p {
      color: chartreuse;
    }
  `]
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
