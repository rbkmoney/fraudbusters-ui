import { NgModule } from '@angular/core';

import { AddRowListModule } from '../../../shared/components/add-row-list/add-row-list.module';
import { WbListModule } from '../../../shared/components/wb-list-old/wb-list.module';
import { AddRowBlackListComponent } from './add-row-black-list/add-row-black-list.component';
import { BlackListRoutingModule } from './black-list-routing.module';
import { BlackListComponent } from './black-list.component';

@NgModule({
    declarations: [BlackListComponent, AddRowBlackListComponent],
    imports: [BlackListRoutingModule, WbListModule, AddRowListModule],
})
export class BlackListModule {}
