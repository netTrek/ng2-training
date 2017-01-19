import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserTitleComponent } from './user-title/user-title.component';
import { UserListComponent } from './user-list/user-list.component';
import { ItalicDirective } from './italic.directive';
import { ReversePipe } from './reverse.pipe';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [UserComponent, UserTitleComponent, UserListComponent, ItalicDirective, ReversePipe, HomeComponent, UserDetailsComponent],
  exports: [UserComponent, UserTitleComponent, UserListComponent, ItalicDirective, ReversePipe, HomeComponent, UserDetailsComponent]
})
export class CommonUiModule { }
