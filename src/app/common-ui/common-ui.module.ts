import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './countdown/countdown.component';
import { HoverDirective } from './directive/hover.directive';
import { AddCharPipe } from './pipe/add-char.pipe';
import { ReversePipe } from './pipe/reverse.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CountdownComponent, HoverDirective, AddCharPipe, ReversePipe],
  exports: [CountdownComponent, HoverDirective, AddCharPipe, ReversePipe]
})
export class CommonUIModule { }
