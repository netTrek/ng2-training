import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IUser, UserService } from '../service/user/user.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DetailResolverService implements Resolve<IUser> {

  constructor( private $user: UserService ) { }

  resolve ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<IUser>|Promise<IUser>|IUser {

    return Observable.create ( observer => {

      this.$user.getUser( route.params['id'] )
          .map ( response => response.json() )
          .subscribe(
              user => {
                observer.next( user );
                observer.complete();
              },
              error => {
                observer.error( error );
              }
          );

    });
  }
}
