import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { LoginService } from '../service/login.service';

@Injectable()
export class DetailCanActiveService implements CanActivate {

  constructor( private $login: LoginService ) { }

  canActivate ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean>|Promise<boolean>|boolean {
    const success: boolean = this.$login.loggedUsr.nick === 'netTrek' &&
        this.$login.loggedUsr.pwd === 'netTrek';
    return success;
  }
}
