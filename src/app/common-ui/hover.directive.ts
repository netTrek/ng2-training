import { Directive, ElementRef, OnDestroy, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive ( {
    selector: '[gfkHover]'
} )
export class HoverDirective implements OnInit /* OnDestroy*/ {

    // color;
    @Input()
    gfkHover : any;

    @HostBinding ('style.color')
    color : any = null;

    @HostBinding ('class.underlined')
    isUnderlined : boolean = false;


    @HostListener ( 'mouseenter', [ '$event' ] )
    mouseEnter ( evt : MouseEvent ) {
        // console.log ( evt );
        this.isUnderlined = true;
        this.color = this.gfkHover;
    }

    @HostListener ( 'mouseleave' )
    mouseLeave () {
        this.isUnderlined = false;
        this.color = null;
    }

    ngOnInit () : void {
        if ( ! this.gfkHover ) {
            this.gfkHover = 'red';
        }
        console.log ( this.gfkHover );
    }

    /*
     constructor( private $element : ElementRef ) {

     console.log ( $element );

     this.init ();

     }

     ngOnDestroy () : void {
     }

     private init () {
     this.$element.nativeElement.addEventListener( 'click', () => {
     console.log ( 'click' );
     } );
     }
     */
}
