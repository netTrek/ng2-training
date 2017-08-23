import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'toaster-container'
})
export class ToasterContainerDirective extends UpgradeComponent {

  constructor(elementRef: ElementRef, injector: Injector) {
    console.log ( 'ToasterContainerDirective', elementRef, injector );
    super('toasterContainer', elementRef, injector);
  }

}
