import { Pipe, PipeTransform } from '@angular/core';
import { isArray } from 'util';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if ( typeof value === 'string' ) {
      return value.split('').reverse().join('');
    } else if ( typeof value === 'number') {
      return Number ( (value + '').split('').reverse().join('') );
    } else if ( isArray ( value) ) {
      return value.reverse();
    }
    return value;
  }

}
