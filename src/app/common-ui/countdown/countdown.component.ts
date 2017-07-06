import { Component, OnDestroy, OnInit } from '@angular/core';

@Component ( {
  selector   : 'pta-countdown',
  templateUrl: './countdown.component.html',
  styleUrls  : [ './countdown.component.css' ]
} )
export class CountdownComponent
  implements OnInit, OnDestroy {

  percent = 100;

  private totaltime = 4;
  private crrtime   = 0;
  private intervalID: any | undefined;

  constructor () {
  }

  ngOnInit () {
    this.intervalID = setInterval ( () => {
      this.crrtime ++;
      this.percent = 100 - (this.crrtime / this.totaltime) * 100;
      if ( this.totaltime === this.crrtime ) {
        this.clearInt ();
      }
    }, 1000 );
  }

  ngOnDestroy (): void {
    this.clearInt ();
  }

  private clearInt () {
    if ( ! ! this.intervalID ) {
      clearInterval ( this.intervalID );
      this.intervalID = undefined;
      console.log ( 'clear' );
    }
  }

}
