import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TemplatesComponent} from './templates/templates.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '',
          redirectTo: '/templates',
          pathMatch: 'full',
        }
      ],
      { paramsInheritanceStrategy: 'always' }
    ),
  ],  exports: [RouterModule]
})
export class AppRoutingModule { }
