import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserHeaderComponent } from './user-header/user-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserComponent, UserListComponent, UserHeaderComponent],
  exports: [UserComponent, UserListComponent, UserHeaderComponent]
})
export class UserModule { }
