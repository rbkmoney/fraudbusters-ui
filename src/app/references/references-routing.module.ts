import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReferencesComponent} from './references.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'references',
        component: ReferencesComponent
      },
    ]),
  ],
  exports: [RouterModule],
})
export class ReferencesRoutingModule {
}
