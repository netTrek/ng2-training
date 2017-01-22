import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if ( Array.isArray( value )) {
      return value.reverse();
    } else if ( typeof value === 'number' || typeof value === 'string' ) {
      if ( typeof value === 'number' ) {
        return parseFloat( (value + '').split ('').reverse().join('') );
      } else {
        return value.split ('').reverse().join('');
      }
    } else {
      return value;
    }

  }

}
