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
        const result: string = val.split('').reverse().join('');
        if ( typeof value === 'number' ) {
          return Number ( result );
        } else {
          return result ;
        }
    }

    return value;
  }

}
