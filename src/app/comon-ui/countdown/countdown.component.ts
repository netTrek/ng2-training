import { Component, OnDestroy, OnInit } from '@angular/core';

@Component ( {
  selector   : 'msg-countdown',
  templateUrl: './countdown.component.html',
  styleUrls  : [ './countdown.component.scss' ]
} )
export class CountdownComponent implements OnInit, OnDestroy {

  progress = 100;

  private _time                      = 10;
  private _intervalID: number | null = null;

  constructor () {
  }

  ngOnInit () {
    let count        = 0;
    this._intervalID = window.setInterval ( () => {
      this.progress = 100 - ( (++ count) / this._time * 100 );
      if ( count === this._time ) {
        this.dispose ();
      }
    }, 1000 );
  }

  ngOnDestroy (): void {
  }

  private dispose () {
    if ( this._intervalID !== null ) {
      window.clearInterval ( this._intervalID );
      this._intervalID = null;
    }
  }

}
