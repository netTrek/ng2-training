import { Pipe, PipeTransform } from '@angular/core';
import { isArray } from 'util';

@Pipe ( {
  name: 'reverse'
} )
export class ReversePipe implements PipeTransform {

  transform ( value: string | number | any[], args?: any ): string | number | any[] | any {

    let list: any[];
    if ( typeof value === 'string' ) {
      list = value.split('');
      return list.reverse().join('');
    } else if ( typeof value === 'number' ) {
      list = (value + '').split('');
      return Number ( list.reverse().join('') );
    } else if ( isArray ( value ) ) {
      return value.reverse();
    }
    return value;
  }

}
