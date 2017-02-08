import { Component, OnInit, HostBinding, HostListener } from '@angular/core';

@Component ( {
    selector   : 'gfk-list-item',
    templateUrl: './list-item.component.html',
    styleUrls  : [ './list-item.component.scss' ]
} )
export class ListItemComponent implements OnInit {

    @HostBinding ( 'class.underlined' )
    isUnderlined : boolean = false;

    constructor () {
    }

    @HostListener ( 'mouseenter', [ '$event' ] )
    mouseEnter ( evt : MouseEvent ) {
        console.log ( evt );
        this.isUnderlined = true;
    }

    @HostListener ( 'mouseleave' )
    mouseLeave () {
        this.isUnderlined = false;
    }

    ngOnInit () {
    }

}
