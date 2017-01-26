import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash/dash.component';
import { RouterModule } from '@angular/router';
import { LoginService } from '../service/login.service';

@NgModule({
  imports: [
    CommonModule,
      RouterModule.forChild( [
        {
          path: '',
          component: DashComponent
        }
      ] )
  ],
  declarations: [DashComponent],
  providers: []
})
export class DashModule { }
