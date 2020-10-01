import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TemplatesComponent} from './templates.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'templates',
        component: TemplatesComponent
      },
    ]),
  ],
  exports: [RouterModule],
})
export class TemplatesRoutingModule {
}
