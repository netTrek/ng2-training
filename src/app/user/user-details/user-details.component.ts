import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { UserDto } from '../../model/user-dto';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'hb-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  selectedId: number;
  public user: UserDto;

  constructor( private $userService: UserService,
               private route: ActivatedRoute ) { }

  next() {
    this.loadUsr( this.selectedId + 1);
  }

  ngOnInit() {

    this.route.paramMap
        .map( params => params.get('id'))
        .subscribe( id => {
          this.loadUsr(Number(id));
        });


  }

  private loadUsr ( id: number ) {
    this.selectedId = id;
    this.$userService.getUser( id )
        .subscribe(
          user => this.user = user,
          err => {
            alert( err );
          }
        );
  }

}
