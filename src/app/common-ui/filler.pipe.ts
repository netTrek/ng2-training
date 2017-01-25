import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filler'
})
export class FillerPipe implements PipeTransform {

  transform( num: number, length = 4): string {

    if ( typeof num !== 'number' ) {
      throw new Error ('filter bitte nur auf Zahlen anwenden!');
    }

    let numStr: string = num + '';
    const strLength: number = numStr.length;

    if ( strLength < length ) {

      const delta: number = length - strLength;

      for ( let i = 0; i < delta; i++ ) {

        numStr = '0' + numStr;

      }

    }

    return numStr;
  }

}
