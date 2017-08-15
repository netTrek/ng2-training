import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserNameComponent } from './user-name/user-name.component';
import { UserPhoneComponent } from './user-phone/user-phone.component';
import { UserFirstNameComponent } from './user-first-name/user-first-name.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserComponent, UserNameComponent, UserPhoneComponent, UserFirstNameComponent],
  exports: [UserComponent, UserNameComponent, UserPhoneComponent, UserFirstNameComponent]
})
export class UserModule { }
