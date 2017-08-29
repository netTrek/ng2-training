import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'msg-user',
  templateUrl: './user.component.html',
  // styles: [`
  //          h2 {
  //            color: red;
  //          }
  //          `]
  styleUrls: ['./user.component.scss']
  // encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
