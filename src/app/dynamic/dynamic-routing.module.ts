import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicLoaderComponent } from './dynamic-loader.component';
import { DynamicComponent } from './dynamic.component';

const routes: Routes = [
  { path     : '',  component: DynamicComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicRoutingModule { }
