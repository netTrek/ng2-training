import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'user'
})
export class UserDirective extends UpgradeComponent {

  constructor(elementRef: ElementRef, injector: Injector) {
    console.log ( 'UserDirective', elementRef, injector );
    super('user', elementRef, injector);
  }

}
