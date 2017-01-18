import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[baywaItalic]'
})
export class ItalicDirective {

  @HostBinding('class.italic') isItalic: boolean = true;

  constructor() { }

}
