import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TemplatesComponent} from './templates.component';
import {CreateTemplateComponent} from './create-template/create-template.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'templates',
        component: TemplatesComponent
      },
      {
        path: 'templates/new',
        component: CreateTemplateComponent
      },
    ]),
  ],
  exports: [RouterModule],
})
export class TemplatesRoutingModule {
}
