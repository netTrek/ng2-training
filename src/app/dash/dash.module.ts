import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild ( [
      {
        path     : '',
        component: DashComponent
      }
    ] )
  ],
  declarations: [DashComponent]
})
export class DashModule { }
