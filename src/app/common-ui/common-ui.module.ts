import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import { ItalicDirective } from './italic.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TitleComponent, NavigationComponent, ListComponent, ListItemComponent, ItalicDirective],
  exports: [TitleComponent, NavigationComponent, ListComponent, ListItemComponent, ItalicDirective]
})
export class CommonUIModule { }
