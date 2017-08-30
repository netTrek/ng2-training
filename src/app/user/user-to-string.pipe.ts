import { Pipe, PipeTransform } from '@angular/core';
import { UserDto } from './user-dto';

@Pipe ( {
  name: 'userToString'
} )
export class UserToStringPipe implements PipeTransform {

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
        return output.trim();
      } else {
        return value.firstname + ' ' + value.lastname;
      }
    }
    return null;
  }

}
