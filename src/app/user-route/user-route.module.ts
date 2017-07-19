import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { CommonUIModule } from '../common-ui/common-ui.module';

@NgModule({
  imports: [
    CommonModule,
    CommonUIModule
  ],
  declarations: [UserListComponent],
  exports: [UserListComponent]
})
export class UserRouteModule { }
