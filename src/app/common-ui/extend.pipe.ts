import { Pipe, PipeTransform } from '@angular/core';

@Pipe ( {
    name: 'extend'
} )
export class ExtendPipe implements PipeTransform {

    transform ( value : any, toExtendWidth : string = ' - heppa ' ) : any {
        return value + toExtendWidth;
    }

}
