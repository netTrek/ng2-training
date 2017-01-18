import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if ( Array.isArray(value)) {
      return (<Array<any>>value).reverse();
    }
    if ( typeof value === 'string' || typeof value === 'number' ) {
      const newVal : any = (value + '').split('').reverse().join('');
      if ( !isNaN(Number(value)) ) {
        return parseFloat( newVal );
      }
      return newVal;
    }

    return value;
  }

}
