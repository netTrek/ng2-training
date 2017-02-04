import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserTitleComponent } from './user-title/user-title.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserComponent, UserTitleComponent, UserListComponent],
  entryComponents: [UserComponent, UserTitleComponent, UserListComponent],
  exports: [UserComponent, UserTitleComponent, UserListComponent]
})
export class CommonUiModule { }
