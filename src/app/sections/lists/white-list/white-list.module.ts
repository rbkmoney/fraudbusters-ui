import { NgModule } from '@angular/core';
import { WhiteListRoutingModule } from './white-list-routing.module';
import { WhiteListComponent } from './white-list.component';
import { AddRowWhiteListComponent } from './add-row-white-list/add-row-white-list.component';
import { WbListModule } from '../../../shared/components/wb-list/wb-list.module';

@NgModule({
    declarations: [WhiteListComponent, AddRowWhiteListComponent],
    imports: [WhiteListRoutingModule, WbListModule],
})
export class WhiteListModule {}
