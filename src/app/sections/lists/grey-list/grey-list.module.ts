import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';

import { P2pWbListsModule } from '../../../api/p2p-wb-lists';
import { PaymentWbListsModule } from '../../../api/payment-wb-lists';
import { EmptySearchResultModule } from '../../../shared/components/empty-search-result';
import { WbListSearchModule } from '../../../shared/components/wb-list-search/wb-list-search.module';
import { WbTableModule } from '../../../shared/components/wb-table';
import { P2pGreyListComponent } from './components/p2p-grey-list/p2p-grey-list.component';
import { PaymentGreyListComponent } from './components/payment-grey-list/payment-grey-list.component';
import { GreyListRoutingModule } from './grey-list-routing.module';
import { GreyListComponent } from './grey-list.component';

@NgModule({
    imports: [
        GreyListRoutingModule,
        FlexModule,
        MatTabsModule,
        CommonModule,
        PaymentWbListsModule,
        P2pWbListsModule,
        WbTableModule,
        MatCardModule,
        MatButtonModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        EmptySearchResultModule,
        WbListSearchModule,
    ],
    declarations: [GreyListComponent, PaymentGreyListComponent, P2pGreyListComponent],
})
export class GreyListModule {}
