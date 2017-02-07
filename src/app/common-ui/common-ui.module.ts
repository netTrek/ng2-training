import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ListTitleComponent } from './list/list-title/list-title.component';
import { ListItemComponent } from './list/list-item/list-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListComponent, ListTitleComponent, ListItemComponent],
  exports: [ListComponent, ListTitleComponent, ListItemComponent]
})
export class CommonUIModule { }
