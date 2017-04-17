import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgTemplateUpdateRoutingModule } from './ng-template-update-routing.module';
import { NgTemplateComponent } from './ng-template.component';
import { GridComponent } from './grid.component';

@NgModule({
  imports: [
    CommonModule,
    NgTemplateUpdateRoutingModule
  ],
  declarations: [NgTemplateComponent, GridComponent]
})
export class NgTemplateUpdateModule { }
