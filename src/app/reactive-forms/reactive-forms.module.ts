import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsRoutingModule } from './reactive-forms-routing.module';
import { ReactiveFormComponent } from './reactive-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsRoutingModule
  ],
  declarations: [ReactiveFormComponent]
})
export class ReactiveFormsModule { }
