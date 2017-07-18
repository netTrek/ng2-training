import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive ( {
  selector: '[appHelloWorld]'
} )
export class HelloWorldDirective {

  get appHelloWorld (): string {
    return this._appHelloWorld;
  }

  @Input ()
  set appHelloWorld ( value: string ) {
    if ( value === '' ) {
      this._appHelloWorld = 'blue';
    } else {
      this._appHelloWorld = value;
    }
  }

  @HostBinding ( 'style.color' )
  color: string | null = null;

  private _appHelloWorld: string;

  constructor ( ref: ElementRef ) {
  }

  @HostListener ( 'mouseenter' )
  private enter () {
    this.color = this.appHelloWorld;
  }

  @HostListener ( 'mouseleave' )
  private leave () {
    this.color = null;
  }

}
