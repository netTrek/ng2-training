import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParamMapUpdateRoutingModule } from './param-map-update-routing.module';
import { ParamMapComponent } from './param-map.component';

@NgModule({
  imports: [
    CommonModule,
    ParamMapUpdateRoutingModule
  ],
  declarations: [ParamMapComponent]
})
export class ParamMapUpdateModule { }
