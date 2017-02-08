import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ListTitleComponent } from './list/list-title/list-title.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import { HoverDirective } from './hover.directive';
import { ExtendPipe } from './extend.pipe';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListComponent, ListTitleComponent, ListItemComponent, HoverDirective, ExtendPipe, ReversePipe],
  exports: [ListComponent, ListTitleComponent, ListItemComponent, HoverDirective, ExtendPipe, ReversePipe]
})
export class CommonUIModule { }
