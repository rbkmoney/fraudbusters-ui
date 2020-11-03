import { NgModule } from '@angular/core';
import { BlackListComponent } from './black-list.component';
import { BlackListRoutingModule } from './black-list-routing.module';
import { WbListModule } from '../../../shared/components/wb-list/wb-list.module';
import { AddRowBlackListComponent } from './add-row-black-list/add-row-black-list.component';

@NgModule({
    declarations: [BlackListComponent, AddRowBlackListComponent],
    imports: [BlackListRoutingModule, WbListModule],
})
export class BlackListModule {}
