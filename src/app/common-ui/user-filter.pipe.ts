import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../jens/user/iuser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';


@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform( value: Observable<Array<IUser>>, args?: any): any {
    return value.filter ( val => val.length < 5 );
  }

}
