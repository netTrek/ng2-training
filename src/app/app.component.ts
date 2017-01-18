import { Component } from '@angular/core';
import {ReversePipe} from './common-ui/reverse.pipe';
import {Observable, Subscription, Subject} from 'rxjs';

@Component({
  selector: 'baywa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app works!';
  now: number = Date.now();
  selectedInd: number = 0;

  constructor (  ) {

    const moveObservable : Observable<MouseEvent> = Observable.fromEvent<MouseEvent>(document, 'mousemove');
    const subscription : Subscription = moveObservable
      .filter ( evt => { return evt.clientX < 100; } )
      .subscribe(
        evt => console.info ( evt )
      );
  }


  /*
  chg ( ind: number ) {
    console.info ( ind );
  }
  */

}
