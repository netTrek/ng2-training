import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService, IUser } from '../service/user/user.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { getResponseURL } from '@angular/http/src/http_utils';


@Component({
  selector: 'avaya-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  user: IUser;

  constructor( private route: ActivatedRoute, private $user: UserService ) { }

  ngOnInit() {

    this.route
        .params
        .map ( params => params['id'] )
        .subscribe(
          // id => console.log ( id )
            id => {

              this.$user.getUser( id )
                  .map ( response => response.json() )
                  .subscribe(
                    user => this.user = user
                  );
            }
        );


  }

}
