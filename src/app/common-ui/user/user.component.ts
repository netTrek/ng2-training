import { AfterContentInit, Component, ContentChild, ContentChildren, OnInit, QueryList } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component ( {
  selector   : 'app-user',
  templateUrl: './user.component.html',
  styleUrls  : [ './user.component.css' ]
} )
export class UserComponent implements OnInit, AfterContentInit {

  @ContentChild ( LoginComponent )
  loginComp: LoginComponent | undefined;

  @ContentChildren ( LoginComponent )
  loginComps: QueryList<LoginComponent>;

  constructor () {
  }

  ngOnInit () {
  }

  ngAfterContentInit (): void {

    console.log ( this.loginComps );

    const logins: LoginComponent[] = this.loginComps.toArray ();

    /*
     console.log ( 'loginComp', this.loginComp );

     if ( ! this.loginComp ) {
     throw new Error ( 'Login Comp required' );
     }

     const old            = this.loginComp.label;
     this.loginComp.label = 'Rock\'n Roll';
     console.log ( `old:= [${old}] new := [${this.loginComp.label}]` );

     */

  }
}
