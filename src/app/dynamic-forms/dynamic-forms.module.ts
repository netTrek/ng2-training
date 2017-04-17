import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicFormsRoutingModule } from './dynamic-forms-routing.module';
import { DynamicFormLoaderComponent } from './dynamic-form-loader.component';

@NgModule({
  imports: [
    CommonModule,
    DynamicFormsRoutingModule
  ],
  declarations: [DynamicFormLoaderComponent]
})
export class DynamicFormsModule { }
