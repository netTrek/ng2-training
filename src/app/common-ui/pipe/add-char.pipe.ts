import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addChar'
})
export class AddCharPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if ( !! args && typeof args === 'string' ) {
      return value + args;
    }
    return value;
  }

}
