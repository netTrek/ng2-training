import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'avaya-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  constructor( $login: LoginService ) { }

  ngOnInit() {
  }

}
