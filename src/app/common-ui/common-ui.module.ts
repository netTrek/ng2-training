import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserTitleComponent } from './user-title/user-title.component';
import { UserListComponent } from './user-list/user-list.component';
import { ItalicDirective } from './italic.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserComponent, UserTitleComponent, UserListComponent, ItalicDirective],
  exports: [UserComponent, UserTitleComponent, UserListComponent, ItalicDirective]
})
export class CommonUiModule { }
