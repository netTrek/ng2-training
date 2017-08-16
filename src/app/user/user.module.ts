import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserNameComponent } from './user-name/user-name.component';
import { UserPhoneComponent } from './user-phone/user-phone.component';
import { UserFirstNameComponent } from './user-first-name/user-first-name.component';
import { UserService } from './service/user.service';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [UserService],
  declarations: [UserComponent, UserNameComponent, UserPhoneComponent, UserFirstNameComponent, UserListComponent, UserDetailsComponent],
  exports: [UserComponent, UserNameComponent, UserPhoneComponent, UserFirstNameComponent, UserListComponent, UserDetailsComponent]
})
export class UserModule { }
