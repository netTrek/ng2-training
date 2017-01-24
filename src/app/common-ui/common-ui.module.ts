import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list/list-item/list-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TitleComponent, NavigationComponent, ListComponent, ListItemComponent],
  exports: [TitleComponent, NavigationComponent, ListComponent, ListItemComponent]
})
export class CommonUIModule { }
