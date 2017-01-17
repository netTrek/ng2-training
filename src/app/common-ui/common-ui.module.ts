import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserTitleComponent } from './user-title/user-title.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserComponent, UserTitleComponent],
  exports: [UserComponent, UserTitleComponent]
})
export class CommonUiModule { }
