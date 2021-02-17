import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { P2pWbListsModule } from '../../../api/p2p-wb-lists';
import { PaymentWbListsModule } from '../../../api/payment-wb-lists';

import { GreyListRoutingModule } from './grey-list-routing.module';
import { GreyListComponent } from './grey-list.component';

@NgModule({
    imports: [GreyListRoutingModule, FlexModule, MatTabsModule, CommonModule, PaymentWbListsModule, P2pWbListsModule],
    declarations: [GreyListComponent],
})
export class GreyListModule {}
