import { Directive, HostBinding, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[avayaItalic], .border'
})
export class ItalicDirective {

    @HostBinding ( 'class.show-as-italic' )
    showAsItalic: boolean = false;

    @HostListener ( 'mouseenter' )
    mouseEnter () {
        this.showAsItalic = true;
    }

    @HostListener ( 'mouseleave' )
    mouseLeave () {
        this.showAsItalic = false;
    }

  constructor( private elem: ElementRef ) {
      // console.log ( elem );
  }

}
