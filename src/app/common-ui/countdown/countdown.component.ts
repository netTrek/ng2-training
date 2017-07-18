import { Component, OnDestroy, OnInit } from '@angular/core';

@Component ( {
  selector   : 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls  : [ './countdown.component.css' ]
} )
export class CountdownComponent implements OnInit, OnDestroy {

  percent = 100;

  private crrTime                     = 0;
  private readonly totalTime          = 500;
  private intervalID: any | undefined = undefined;

  constructor () {
  }

  ngOnInit () {
    this.intervalID = setInterval ( () => {
      this.countDown ();
    }, 1000 );
  }

  ngOnDestroy (): void {
    this.disposeInterval();
  }

  private countDown () {
    this.crrTime ++;
    this.percent = Math.floor( 100 - (this.crrTime / this.totalTime * 100) );
    if ( this.crrTime === this.totalTime ) {
      this.disposeInterval();
    }
  }

  private disposeInterval () {
    if ( !! this.intervalID ) {
      clearInterval( this.intervalID );
      this.intervalID = undefined;
    }
  }
}
