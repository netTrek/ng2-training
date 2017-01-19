import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'baywa-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userId: number;

  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route
      .params
      .map(params => params['id'] )
      .subscribe( id => this.userId = id );

  }

}
