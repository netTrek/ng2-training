import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform( value: any, args?: any ): any {

    if ( Array.isArray( value ) ) {
      return value.reverse();
    } else if ( typeof value === 'string' || typeof value === 'number'  ) {
        const val = value + '';
        if ( typeof value === 'number' ) {
          return Number ( val.split('').reverse().join('') );
        } else {
          return val.split('').reverse().join('') ;
        }
    }

    return value;
  }

}
