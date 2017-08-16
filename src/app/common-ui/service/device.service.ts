import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Injectable ()
export class DeviceService {

  uuid = 'jasgdjhsgajdgsjha';
  mousemove$: Observable<MouseEvent> = Observable.fromEvent ( document, 'mousemove' );
  resize$: Observable<Event> = Observable.fromEvent ( window, 'resize' );

  constructor () {
  }

}
