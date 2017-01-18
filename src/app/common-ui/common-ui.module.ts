import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserTitleComponent } from './user-title/user-title.component';
import { UserListComponent } from './user-list/user-list.component';
import { ItalicDirective } from './italic.directive';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserComponent, UserTitleComponent, UserListComponent, ItalicDirective, ReversePipe],
  exports: [UserComponent, UserTitleComponent, UserListComponent, ItalicDirective, ReversePipe]
})
export class CommonUiModule { }
