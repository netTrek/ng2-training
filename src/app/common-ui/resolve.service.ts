import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {IUser, UserService} from './user.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ResolveService implements Resolve<IUser>  {

  constructor( private $user: UserService ) { }

  resolve(  route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<IUser>|Promise<IUser>|IUser {

    return this.$user.getUser( route.params[ 'id' ] );
  }
}
