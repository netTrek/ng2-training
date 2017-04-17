import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgForUpdateRoutingModule } from './ng-for-update-routing.module';
import { NgForComponent } from './ng-for/ng-for.component';

@NgModule({
  imports: [
    CommonModule,
    NgForUpdateRoutingModule
  ],
  declarations: [NgForComponent]
})
export class NgForUpdateModule { }
