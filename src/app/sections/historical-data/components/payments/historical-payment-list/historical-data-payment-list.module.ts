import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';

import { HistoricalDataPaymentHeaderComponent } from './components/template-header/historical-data-payment-header.component';
import { HistoricalDataPaymentItemComponent } from './components/template-item/historical-data-payment-item.component';
import { HistoricalDataPaymentListComponent } from './historical-data-payment-list.component';
import { SharedPipesModule } from '../../../../../shared/pipes';
import { ListHeaderModule } from '../../../../../shared/components/list-header';

@NgModule({
    imports: [
        CommonModule,
        FlexModule,
        MatExpansionModule,
        MatDividerModule,
        SharedPipesModule,
        MatButtonModule,
        ListHeaderModule,
    ],
    declarations: [
        HistoricalDataPaymentListComponent,
        HistoricalDataPaymentHeaderComponent,
        HistoricalDataPaymentItemComponent,
    ],
    exports: [HistoricalDataPaymentListComponent],
})
export class HistoricalDataPaymentListModule {}
