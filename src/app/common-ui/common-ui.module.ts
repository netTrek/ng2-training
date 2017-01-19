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
import { ContactComponent } from './contact/contact.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactFormsComponent } from './contact-forms/contact-forms.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [UserComponent, UserTitleComponent, UserListComponent, ItalicDirective, ReversePipe, HomeComponent, UserDetailsComponent, ContactComponent, ContactDetailsComponent, ContactFormsComponent],
  exports: [UserComponent, UserTitleComponent, UserListComponent, ItalicDirective, ReversePipe, HomeComponent, UserDetailsComponent, ContactComponent, ContactDetailsComponent, ContactFormsComponent]
})
export class CommonUiModule { }
