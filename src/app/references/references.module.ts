import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReferencesComponent} from './references.component';
import {ReferencesRoutingModule} from './references-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    ReferencesComponent
  ],
  imports: [
    CommonModule,
    ReferencesRoutingModule,
    MatToolbarModule
  ]
})
export class ReferencesModule {
}
