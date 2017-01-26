import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PermissionService } from '../service/permission.service';

@Component({
  selector: 'avaya-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private router: Router, public $permission: PermissionService ) { }

  goToList () {
    this.router.navigate( ['list'] );
  }

  ngOnInit() {
  }

}
