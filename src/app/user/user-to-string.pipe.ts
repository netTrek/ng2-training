import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { UserDto } from './user-dto';

@Pipe ( {
  name: 'userToString'
} )
export class UserToStringPipe implements PipeTransform {

  constructor ( @Inject( LOCALE_ID) private _localId: string  ) {}

  transform ( value: UserDto, ...properties: string[] ): string {
    if ( ! ! value ) {
      if ( ! ! properties && properties.length > 0 ) {
        let output = '';
        for ( let i = 0; i < properties.length; i ++ ) {
          if ( i > 0 ) {
            output += ' ';
          }
          const propName: string = properties[ i ];
          if ( value.hasOwnProperty ( propName ) ) {
            const propValue: any = value[ propName ];
            if ( ! ! propValue ) {
              output += propValue.toString ();
            }
          }
        }
        return output.trim() + ' ' + this._localId;
      } else {
        return value.firstname + ' ' + value.lastname;
      }
    }
    return null;
  }

}
