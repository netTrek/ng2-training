import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { UserHeaderComponent } from './user/user-header/user-header.component';
import { UserNameComponent } from './user/user-name/user-name.component';
import { CountdownComponent } from './countdown/countdown.component';
import { HelloWorldDirective } from './directives/hello-world.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, UserComponent, UserHeaderComponent, UserNameComponent, CountdownComponent, HelloWorldDirective],
  exports: [LoginComponent, UserComponent, UserHeaderComponent, UserNameComponent, CountdownComponent, HelloWorldDirective]
})
export class CommonUIModule { }
