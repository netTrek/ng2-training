import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParamMapComponent } from './param-map.component';

const routes: Routes = [
  { path     : ':id',  component: ParamMapComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParamMapUpdateRoutingModule { }
