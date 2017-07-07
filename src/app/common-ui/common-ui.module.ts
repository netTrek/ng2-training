import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListHeaderComponent } from './user-list-header/user-list-header.component';
import { CountdownComponent } from './countdown/countdown.component';
import { FormsModule } from '@angular/forms';
import { DoHoverDirective } from './do-hover.directive';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserComponent, UserListComponent, UserListHeaderComponent, CountdownComponent, DoHoverDirective, ReversePipe],
  exports: [UserComponent, UserListComponent, UserListHeaderComponent, CountdownComponent, DoHoverDirective, ReversePipe]
})
export class CommonUiModule { }
