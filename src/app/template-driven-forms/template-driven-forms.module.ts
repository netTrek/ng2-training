import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateDrivenFormsRoutingModule } from './template-driven-forms-routing.module';
import { TempDrivenFormComponent } from './temp-driven-form.component';

@NgModule({
  imports: [
    CommonModule,
    TemplateDrivenFormsRoutingModule
  ],
  declarations: [TempDrivenFormComponent]
})
export class TemplateDrivenFormsModule { }
