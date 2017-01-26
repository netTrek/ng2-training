import { Pipe, PipeTransform } from '@angular/core';
import { HelperService } from './services/HelperService';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

    constructor ( private $helperService: HelperService  ) {}

  transform( value: any, args?: any ): any {

    if ( this.$helperService.isArray( value ) ) {
      return value.reverse();
    } else if ( this.$helperService.isNumber( value ) || this.$helperService.isString ( value )  ) {
        const val = value + '';
        const result: string = val.split('').reverse().join('');
        if ( this.$helperService.isNumber( value ) ) {
          return Number ( result );
        } else {
          return result ;
        }
    }

    return value;
  }

}
