import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, UserComponent],
  exports: [LoginComponent, UserComponent]
})
export class CommonUIModule { }
