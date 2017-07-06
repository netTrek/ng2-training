import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pta-user',
  templateUrl: './user.component.html',
  styles: [`
    :host {
      display: block;
      background-color: #ffe31b;
      color: red;
    }
    .spielen {
      color: black;
    }
  `]
})
export class UserComponent implements OnInit {

  username = 'Peter Müller';

  constructor() { }

  ngOnInit() {
  }

}
