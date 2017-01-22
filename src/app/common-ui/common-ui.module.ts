import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserTitleComponent } from './user-title/user-title.component';
import { UserListComponent } from './user-list/user-list.component';
import { ReversePipe } from './reverse.pipe';
import { ItalicDirective } from './italic.directive';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {RouterModule} from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ContactBaseComponent } from './contact-base/contact-base.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [UserComponent, UserTitleComponent, UserListComponent, ReversePipe, ItalicDirective, HomeComponent, UserDetailComponent, ContactComponent, ContactBaseComponent, ContactFormComponent],
  exports: [UserComponent, UserTitleComponent, UserListComponent, ReversePipe, ItalicDirective, HomeComponent, UserDetailComponent, ContactComponent, ContactBaseComponent, ContactFormComponent]
})
export class CommonUiModule { }
