import { Injectable } from '@angular/core';
import { DummyService } from './dummy.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {

  company$: BehaviorSubject<string> = new BehaviorSubject( 'netTrek' );

  constructor( $dummy: DummyService ) {
    console.log ( $dummy );
    console.log ( 'creating USerService' );
  }

}
