import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'baywa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private router: Router) { }

  goList(): void {
    this.router.navigate( ['details'] );
  }

  ngOnInit() {
  }

}
