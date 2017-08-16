import { Pipe, PipeTransform } from '@angular/core';
import { isArray } from 'util';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if ( typeof value === 'string' ) {
      // "Sab" .split('') = ['S','a','b']
      // ['b','a','S'].join('') = "baS"
      return value.split('').reverse().join('');
    } else if ( typeof value === 'number' ) {
        // 234234 .toString ()  12323 +''
      return Number ( value.toString().split('').reverse().join('') );
    } else if ( typeof value === 'boolean' ) {
      return !value;
    } else if ( isArray( value )) {
      return value.reverse();
    }
    return value;
  }

}
