import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgTemplateComponent } from './ng-template.component';

const routes: Routes = [
  { path     : '',  component: NgTemplateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgTemplateUpdateRoutingModule { }
