import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { reduce } from 'rxjs/operator/reduce';

@Directive({
  selector: '[appDoHover]'
})
export class DoHoverDirective implements AfterViewInit, OnInit {

  @HostBinding ( 'style.color' )
  color: string|null = null;

  @Input()
  appDoHover: string|null = null;

  constructor( /*private $elem: ElementRef*/ ) { }

  @HostListener ('mouseenter')
  enter () {
    console.log ( this.appDoHover );
    this.color = this.appDoHover;
  }

  @HostListener ('mouseleave')
  leave () {
    this.color = null;
  }

  ngOnInit (): void {
    if ( this.appDoHover === null || this.appDoHover === '') {
      this.appDoHover = 'red';
    }
  }

  ngAfterViewInit (): void {
    /*console.log ( 'dir for', this.$elem.nativeElement );*/
  }
}
