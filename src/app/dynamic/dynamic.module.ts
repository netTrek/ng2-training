import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicRoutingModule } from './dynamic-routing.module';
import { DynamicLoaderComponent } from './dynamic-loader.component';
import { DynamicComponent } from './dynamic.component';
import { CompAComponent } from './comp-a.component';
import { CompBComponent } from './comp-b.component';

@NgModule({
  imports: [
    CommonModule,
    DynamicRoutingModule
  ],
  declarations: [DynamicLoaderComponent, DynamicComponent, CompAComponent, CompBComponent],
  entryComponents: [CompAComponent, CompBComponent]
})
export class DynamicModule { }
