import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '../app.module';

@Component({
  selector: 'gfk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private $router : Router ) { }

  goToList() {
    this.$router.navigate( [  ROUTES.LIST ] );
  }

  ngOnInit() {
  }

}
