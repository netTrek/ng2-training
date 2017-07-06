import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pta-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username = 'Peter Müller';

  constructor() { }

  ngOnInit() {
  }

}
