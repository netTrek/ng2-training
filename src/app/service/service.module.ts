import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from './users.service';
import { HttpModule } from '@angular/http';
import { ResolveUserService } from './resolve-user.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule
  ],
  declarations: [],
  providers: [ UsersService, ResolveUserService ]
})
export class ServiceModule { }
