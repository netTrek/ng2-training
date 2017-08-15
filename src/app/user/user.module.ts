import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserNameComponent } from './user-name/user-name.component';
import { UserPhoneComponent } from './user-phone/user-phone.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserComponent, UserNameComponent, UserPhoneComponent],
  exports: [UserComponent, UserNameComponent, UserPhoneComponent]
})
export class UserModule { }
