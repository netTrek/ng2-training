import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component ( {
  selector   : 'hb-countdown',
  templateUrl: './countdown.component.html',
  styleUrls  : [ './countdown.component.scss' ]
} )
export class CountdownComponent implements OnInit, OnDestroy {

  private _time = 10; // zeit bis ablauf

  private count = 0; // abgelaufen zeit
  private intervalID; // ref. zum Intervsal

  get width (): number {
    if ( this.count === 0 ) {
      return 100;
    }
    return 100 - ( this.count / this._time ) * 100;
  }

  get time (): number {
    return this._time;
  }

  @Input()
  set time ( value: number ) {
    this._time = Number (value);
  }

  constructor () {
  }

  ngOnInit () {
    this.intervalID = setInterval ( () => {
      if ( ++ this.count === this._time ) {
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
