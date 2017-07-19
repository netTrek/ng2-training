import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from '../../common-ui/services/user.service';
import { Observable } from 'rxjs/Observable';
import { IUser } from '../../common-ui/services/iuser';

@Component ( {
  selector   : 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls  : [ './user-details.component.css' ]
} )
export class UserDetailsComponent implements OnInit, OnDestroy {

  user: Observable<IUser>;

  private subscription: Subscription;

  constructor ( private activatedRoute: ActivatedRoute, private $user: UserService, private router: Router) {
  }

  ngOnInit () {

    console.log ( 'init' );
    this.subscription = this.activatedRoute.paramMap
                            .map ( paramMap => paramMap.get ( 'id' ) )
                            .subscribe (
                              next => this.user = this.$user.getUserbyID ( next )
                            )
    ;
  }

  showNext () {
    // this.user = this.$user.getUserbyID ( 36 );
    this.router.navigate( ['detail', 36 ] );
  }

  ngOnDestroy (): void {
    if ( ! ! this.subscription ) {
      this.subscription.unsubscribe ();
      this.subscription = undefined;
    }
  }

}
