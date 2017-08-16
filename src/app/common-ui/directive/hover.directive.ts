import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[hbHover]'
})
export class HoverDirective {

  constructor( elemRef: ElementRef ) {

    console.log ( elemRef.nativeElement );

  }

  // [style.color]="color"
  @HostBinding ( 'style.color' )
  color = undefined;

  // target font color
  @Input ()
  hbHover: string;


  // [style.background-color]="color"
  @HostBinding ( 'style.backgroundColor' )
  bgcolor = undefined;

  // (mouseenter)="enter()"
  @HostListener ( 'mouseenter' )
  enter ( evt?: Event ) {
    this.color   = this.hbHover === '' ? 'red' : this.hbHover;
    this.bgcolor = 'yellow';
  }

  // (mouseleave)="leave()"
  @HostListener ( 'mouseleave' )
  leave ( evt?: Event ) {
    this.color   = undefined;
    this.bgcolor = undefined;
  }

}
