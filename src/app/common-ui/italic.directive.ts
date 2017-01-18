import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[baywaItalic]'
})
export class ItalicDirective {

  @HostBinding('class.italic') isItalic: boolean = false;

  constructor() { }

  @HostListener('mouseenter')
  onMouseEnter () {
    this.isItalic = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isItalic = false;
  }

}
