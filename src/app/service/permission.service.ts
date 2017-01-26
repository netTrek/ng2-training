import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable()
export class PermissionService {

  constructor( private $login: LoginService ) { }

  get listPermission (): boolean {
    return this.$login.loggedUsr.nick === 'netTrek';
  }

}
