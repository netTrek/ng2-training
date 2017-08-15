import { Component, OnDestroy, OnInit } from '@angular/core';

@Component ( {
  selector   : 'hb-countdown',
  templateUrl: './countdown.component.html',
  styleUrls  : [ './countdown.component.scss' ]
} )
export class CountdownComponent implements OnInit, OnDestroy {

  private time  = 10; // zeit bis ablauf
  private count = 0; // abgelaufen zeit
  private intervalID; // ref. zum Intervsal

  get width (): number {
    if ( this.count === 0 ) {
      return 100;
    }
    return (this.time - this.count) * 10;
  }

  constructor () {
  }

  ngOnInit () {
    this.intervalID = setInterval ( () => {
      if ( ++ this.count === this.time ) {
        this.dispose ();
      }
    }, 1000 );

  }

  ngOnDestroy (): void {
    this.dispose ();
  }

  private dispose () {
    clearInterval ( this.intervalID );
  }
}
