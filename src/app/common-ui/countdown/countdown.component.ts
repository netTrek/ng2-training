import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component ( {
  selector   : 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls  : [ './countdown.component.css' ]
} )
export class CountdownComponent implements OnInit, OnDestroy, OnChanges {


  get totalTime (): number {
    return this._totalTime;
  }

  @Input ()
  set totalTime ( value: number ) {
    this._totalTime = Number ( value );
  }

  @Output()
  restTime: EventEmitter<number> = new EventEmitter ();

  percent = 100;

  private crrTime                     = 0;
  private intervalID: any | undefined = undefined;
  private _totalTime                  = 10;

  constructor () {
  }

  ngOnChanges ( changes: SimpleChanges ): void {
    console.log ( changes );
  }

  ngOnInit () {
    this.intervalID = setInterval ( () => {
      this.countDown ();
    }, 1000 );
  }

  ngOnDestroy (): void {
    this.disposeInterval ();
  }

  private countDown () {
    this.crrTime ++;
    this.percent = Math.floor ( 100 - (this.crrTime / this.totalTime * 100) );
    if ( this.crrTime === this.totalTime ) {
      this.disposeInterval ();
    } else {
      this.restTime.emit( this.totalTime - this.crrTime );
    }
  }

  private disposeInterval () {
    if ( ! ! this.intervalID ) {
      clearInterval ( this.intervalID );
      this.intervalID = undefined;
    }
  }
}
