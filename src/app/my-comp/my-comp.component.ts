import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { UserService } from '../service/user.service';

@Component({
  selector: 'pta-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {

  constructor( /*private http: Http, */public userService: UserService ) {
    console.log ( /*http,*/ userService );

  }

  ngOnInit() {
  }

  chgName () {
    this.userService.name = 'Franz';
  }

}

