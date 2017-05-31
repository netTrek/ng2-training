import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';

@Pipe({
  name: 'notNull'
})
export class NotNullPipe implements PipeTransform {

  transform(value: Observable<any>, args?: any): any {
    if ( !! value ) {
      console.log ( 'gib ob' );
      return value.filter ( val => val !== null || val !== undefined );
    }
    return Observable.of ( undefined );
  }

}
