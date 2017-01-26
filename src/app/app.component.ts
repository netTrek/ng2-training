import {
  Component
} from '@angular/core';
import { IListModel } from './common-ui/list/list.component';
import { UpperCasePipe } from '@angular/common';
import { environment } from '../environments/environment';
import { Observable, Subscription } from 'rxjs';
import { count } from 'rxjs/operator/count';

@Component({
  selector: 'avaya-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  borderClass: string = 'width-border';

  imgWidth: number = 100;
  imgUrl: string = '../assets/images/logo.png';

  html: string = '<strong>Cool oder?</strong>';


  title = 'app works!';
  selectedInd: number = 3;

  buildInfo = environment.buidInfo;

  userList: IListModel[] = [
      {
        num: 10,
        name: 'Saban'
      },
      {
        num: 12,
        name: 'Peter'
      },
      {
        num: 22,
        name: 'Frank'
      },
      {
        num: 33,
        name: 'Hans'
      }
  ];

  constructor () {

    const uppercasePipe: UpperCasePipe = new UpperCasePipe ();

    const testing = 'test';
    this.title = uppercasePipe.transform( testing );
    console.log ( testing, this.title );

    // const observable: Observable<number> = Observable.range ( 1, 5 );
    // const observable: Observable<string> = Observable.of ( 'saban', 'peter', 'franz' );

    const observable: Observable<number> = Observable.create ( observer => {
        // observer.next( 1 );
        // observer.next( 2 );
        // observer.next( 3 );
        // observer.next( 4 );
        // // observer.error( 'geht nicht' );
        // observer.next( 5 );
        // observer.next( 6 );
        // observer.complete();

        let count = 0;
        let intervalID: number;

        intervalID = window.setInterval( () => {
            observer.next( count++ );
            if ( count === 6 ) {
                observer.complete();
                window.clearInterval( intervalID );
            }
        }, 500 );

    } );


    const subscription: Subscription = observable
        .filter ( val => val % 2 === 0 )
        .map ( val => val * 100 )
        .subscribe(
            next => {
                console.log ( 'next', next );
                if ( next === 200 ) {
                    console.log ( 'stop' );
                    subscription.unsubscribe();
                }
            },

            error => {
                console.error ( 'error', error );
            },
            () => {
                console.log( 'complete');
            }
        );

    console.log ( subscription );

  }
  /*
  onListIndexChg ( ind: number ) {
    console.log ( 'event', ind );
    this.selectedInd = ind;
  }
  */
}
