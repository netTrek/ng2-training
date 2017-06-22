import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicFormsRoutingModule } from './dynamic-forms-routing.module';
import { DynamicFormLoaderComponent } from './dynamic-form-loader.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicInputComponent } from './dynamic-input/dynamic-input.component';
import { InputTextModule } from "primeng/components/inputtext/inputtext";
import { DropdownModule } from "primeng/components/dropdown/dropdown";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    DynamicFormsRoutingModule
  ],
  declarations: [DynamicFormLoaderComponent, DynamicFormComponent, DynamicInputComponent]
})
export class DynamicFormsModule {}
