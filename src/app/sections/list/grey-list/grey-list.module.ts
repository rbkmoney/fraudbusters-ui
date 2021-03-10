import { NgModule } from '@angular/core';

import { AddRowListModule } from '../../../shared/components/add-row-list/add-row-list.module';
import { WbListModule } from '../../../shared/components/wb-list-old/wb-list.module';
import { AddRowGreyListComponent } from './add-row-grey-list/add-row-grey-list.component';
import { GreyListRoutingModule } from './grey-list-routing.module';
import { GreyListComponent } from './grey-list.component';

@NgModule({
    declarations: [GreyListComponent, AddRowGreyListComponent],
    imports: [GreyListRoutingModule, WbListModule, AddRowListModule],
})
export class GreyListModule {}
