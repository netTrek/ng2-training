import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'ngForUpdate'
  },
  {
    path: 'ngForUpdate',
    loadChildren: './ng-for-update/ng-for-update.module#NgForUpdateModule'
  },
  {
    path: 'ngIfUpdate',
    loadChildren: './ng-if-update/ng-if-update.module#NgIfUpdateModule'
  },
  {
    path: 'ngTemplateUpdate',
    loadChildren: './ng-template-update/ng-template-update.module#NgTemplateUpdateModule'
  },
  {
    path: 'paramMap',
    loadChildren: './param-map-update/param-map-update.module#ParamMapUpdateModule'
  },
  {
    path: 'dynamic',
    loadChildren: './dynamic/dynamic.module#DynamicModule'
  },
  {
    path: 'templateDrivenForms',
    loadChildren: './template-driven-forms/template-driven-forms.module#TemplateDrivenFormsModule'
  },
  {
    path: 'reactiveForms',
    loadChildren: './reactive-forms/reactive-forms.module#ReactiveFormsModule'
  },
  {
    path: 'dynamicForms',
    loadChildren: './dynamic-forms/dynamic-forms.module#DynamicFormsModule'
  },
  {
    path: '**',
    redirectTo: 'ngForUpdate'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
