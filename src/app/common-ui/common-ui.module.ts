import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { UserComponent } from '../jens/user/user.component';
import { FormsModule } from '@angular/forms';
import { DoHoverDirective } from './do-hover.directive';
import { HastagerPipe } from './hastager.pipe';
import { ReversePipe } from './reverse.pipe';
import { UserFilterPipe } from './user-filter.pipe';

@NgModule ( {
  imports     : [
    CommonModule,
    FormsModule
  ],
  declarations: [ ListComponent, UserComponent, DoHoverDirective, HastagerPipe, ReversePipe, UserFilterPipe ],
  exports     : [ ListComponent, UserComponent, DoHoverDirective, HastagerPipe, UserFilterPipe ]
} )
export class CommonUiModule {
}
