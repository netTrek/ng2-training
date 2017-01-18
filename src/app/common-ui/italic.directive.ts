import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[baywaItalic]'
})
export class ItalicDirective {

  private _fontcolor: any = null;

  @HostBinding('class.italic') isItalic: boolean = false;

  @HostBinding('style.color') fontcolor: any = null;

  @Input()
  set baywaItalic(val: any) {
    this._fontcolor = val;
  }


  constructor() {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.isItalic = true;
    this.fontcolor = this._fontcolor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isItalic = false;
    this.fontcolor = null;
  }

}
