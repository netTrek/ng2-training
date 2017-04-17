import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicFormLoaderComponent } from './dynamic-form-loader.component';

const routes: Routes = [
  { path     : '',  component: DynamicFormLoaderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicFormsRoutingModule { }
