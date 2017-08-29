import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component ( {
  selector   : 'msg-countdown',
  templateUrl: './countdown.component.html',
  styleUrls  : [ './countdown.component.scss' ]
} )
export class CountdownComponent implements OnInit, OnDestroy {
  get time (): number {
    return this._time;
  }

  @Input()
  set time ( value: number ) {
    this._time = Number (value);
  }

  progress = 100;

  @Input ()
  unit = '%';


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
    this.dispose ();
  }

  private dispose () {
    if ( this._intervalID !== null ) {
      window.clearInterval ( this._intervalID );
      this._intervalID = null;
    }
  }

}
