import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TemplatesComponent} from './templates.component';
import {CreateTemplateComponent} from './create-template/create-template.component';
import {EditTemplateComponent} from './edit-template/edit-template.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'templates',
        component: TemplatesComponent,
      },
      {
        path: 'templates/new',
        component: CreateTemplateComponent,
      },
      {
        path: 'templates/:id',
        component: EditTemplateComponent,
      },
    ]),
    ],
    exports: [RouterModule],
})
export class TemplatesRoutingModule {}
