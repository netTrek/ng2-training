import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {IUser, UserService} from './user.service';

@Injectable()
export class ResolveService implements Resolve<boolean> {

  constructor( private $user: UserService ) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<boolean>|Promise<boolean> {

    this.$user.userSubject.next( null );
    return Observable.create ( observer => {
      this.$user.getUser( route.params['id'] )
        .filter ( result => result !== null )
        .subscribe( result => {
          observer.next( true );
          observer.complete();
        }, error => {
          observer.error( error );
        });
    });

  }
}
