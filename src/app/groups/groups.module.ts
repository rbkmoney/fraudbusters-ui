import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {GroupsRoutingModule} from './groups-routing.module';
import {GroupsComponent} from './groups.component';


@NgModule({
  declarations: [
    GroupsComponent
  ],
  imports: [
    CommonModule,
    GroupsRoutingModule,
    MatToolbarModule
  ]
})
export class GroupsModule {
}
