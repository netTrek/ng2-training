import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserNameComponent } from './user-name/user-name.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserComponent, UserNameComponent],
  exports: [UserComponent, UserNameComponent]
})
export class UserModule { }
