import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { UserComponent } from '../jens/user/user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListComponent, UserComponent],
  exports: [ListComponent, UserComponent]
})
export class CommonUiModule { }
