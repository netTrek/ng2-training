import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateDrivenFormsRoutingModule } from './template-driven-forms-routing.module';
import { TempDrivenFormComponent } from './temp-driven-form.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/primeng';
import { AutoCompleteModule } from 'primeng/components/autocomplete/autocomplete';
import { ButtonModule } from 'primeng/components/button/button';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    AutoCompleteModule,
    ButtonModule,
    DropdownModule,
    TemplateDrivenFormsRoutingModule

  ],
  declarations: [TempDrivenFormComponent]
})
export class TemplateDrivenFormsModule { }
