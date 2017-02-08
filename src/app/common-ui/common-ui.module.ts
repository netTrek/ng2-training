import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ListTitleComponent } from './list/list-title/list-title.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import { HoverDirective } from './hover.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListComponent, ListTitleComponent, ListItemComponent, HoverDirective],
  exports: [ListComponent, ListTitleComponent, ListItemComponent, HoverDirective]
})
export class CommonUIModule { }
