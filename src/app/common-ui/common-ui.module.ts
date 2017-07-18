import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { UserHeaderComponent } from './user/user-header/user-header.component';
import { UserNameComponent } from './user/user-name/user-name.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, UserComponent, UserHeaderComponent, UserNameComponent],
  exports: [LoginComponent, UserComponent, UserHeaderComponent, UserNameComponent]
})
export class CommonUIModule { }
