import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IUser, UsersService } from './users.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ResolveUserService implements Resolve<IUser> {

  constructor( private $user : UsersService ) { }

  resolve ( route : ActivatedRouteSnapshot,
            state : RouterStateSnapshot ) : Observable<IUser>|Promise<IUser>|IUser {

    const id : number = route.params ['id'];

    return this.$user.getUser( id );



  }
}
