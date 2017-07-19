import { Pipe, PipeTransform } from '@angular/core';

@Pipe ( {
  name: 'firstPipe'
} )
export class FirstPipePipe implements PipeTransform {

  transform ( value: any, char: string = '*' ): any {
    return char + value + char;
  }

}
