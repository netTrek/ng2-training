import { Pipe, PipeTransform } from '@angular/core';

@Pipe ( {
    name: 'reverse'
} )
export class ReversePipe implements PipeTransform {

    transform ( value : string|Array<any>|number ) : string|Array<any>|number {

        if ( Array.isArray ( value ) ) {
            return value.reverse ();
        } else if ( typeof value === 'string' || typeof value === 'number' ) {
            const valueReversed = ( value + '' ).split ( '' )
                                              .reverse ()
                                              .join ( '' );
            if ( typeof value === 'number' ) {
                return parseFloat( valueReversed );
            }
            return valueReversed;
        }

        return value;
    }

}
