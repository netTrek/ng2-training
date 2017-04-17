import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TempDrivenFormComponent } from './temp-driven-form.component';

const routes: Routes = [
  { path     : '',  component: TempDrivenFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateDrivenFormsRoutingModule { }
