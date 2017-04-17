import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgIfUpdateRoutingModule } from './ng-if-update-routing.module';
import { NgIfComponent } from './ng-if.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgIfUpdateRoutingModule,
      FormsModule
  ],
  declarations: [NgIfComponent]
})
export class NgIfUpdateModule { }
