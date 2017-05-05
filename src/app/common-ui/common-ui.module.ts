import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileSelectorComponent } from './file-selector/file-selector.component';
import { CarIDNoComponent } from './car-idno/car-idno.component';
import { CarTypeComponent } from './car-type/car-type.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FileSelectorComponent, CarIDNoComponent, CarTypeComponent],
  exports: [FileSelectorComponent, CarIDNoComponent, CarTypeComponent]
})
export class CommonUIModule { }
