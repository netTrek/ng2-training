import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IUser } from '../../app.component';

@Injectable()
export class UserService {

  constructor() { }

  getUserList (): Observable<Array<IUser>> {
    return Observable.create ( observer => {

      setTimeout ( () => {
        observer.next ( [
          {
            fistname: 'saban',
            lastname: 'ünlü',
            age     : 43
          },
          {
            fistname: 'hans',
            lastname: 'walter',
            age     : 12
          }
        ] );
      }, 2000 );

    } );
  }
}
