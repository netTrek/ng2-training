import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hastager'
})
export class HastagerPipe implements PipeTransform {

  transform(value: string, symbol: string = '#'): string {
    return symbol + value;
  }

}
