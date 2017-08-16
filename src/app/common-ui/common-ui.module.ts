import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { HoverDirective } from './directive/hover.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CountdownComponent, HoverDirective],
  exports: [CountdownComponent, HoverDirective]
})
export class CommonUIModule { }
