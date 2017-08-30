import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserNameComponent } from './user-name/user-name.component';
import { UserToStringPipe } from './user-to-string.pipe';
import { UserService } from './service/user.service';
import { DummyService } from './service/dummy.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [ UserService, DummyService ],
  declarations: [UserComponent, UserListComponent, UserHeaderComponent, UserNameComponent, UserToStringPipe],
  exports: [UserComponent, UserListComponent, UserHeaderComponent, UserNameComponent, UserToStringPipe]
})
export class UserModule { }
