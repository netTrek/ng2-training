import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private $router: Router ) {
    // console.log ( $router );
  }

  goToUsr() {
    this.$router.navigate( ['user'] );
  }

  ngOnInit() {

  }

}
