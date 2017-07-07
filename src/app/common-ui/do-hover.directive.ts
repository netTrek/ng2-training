import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive ( {
  selector: '[ptaDoHover]'
} )
export class DoHoverDirective {

  @HostBinding ( 'style.color' )
  hoverColor: string | null = null;

  @Input()
  ptaDoHover = 'red';

  constructor ( public elem: ElementRef ) {
    // console.log ( elem );
  }

  @HostListener ( 'mouseenter' )
  mouseenter () {
    this.hoverColor = this.ptaDoHover;
  }

  @HostListener ( 'mouseleave' )
  mouseleave () {
    this.hoverColor = null;
  }

}
