import {Directive, HostBinding, HostListener, Input, ElementRef} from '@angular/core';

@Directive({
  selector: '[appItalic]'
})
export class ItalicDirective {

  @HostBinding ('class.italic')
  italic = false;

  private _appItalic: number|string = 'red';
  @Input ()
  set appItalic(value: number|string) {
    this._appItalic = value;
  }
  get appItalic(): number|string {
    return this._appItalic;
  }

  @HostBinding ('style.color')
  color: number|string;

  constructor() { }

  @HostListener ('mouseenter')
  enter () {
    this.italic = true;
    this.color = this.appItalic;
  }

  @HostListener ('mouseleave')
  leave () {
    this.italic = false;
    this.color = null;
  }

}
