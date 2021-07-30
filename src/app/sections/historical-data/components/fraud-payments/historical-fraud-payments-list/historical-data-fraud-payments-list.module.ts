import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';

import { ListHeaderModule } from '../../../../../shared/components/list-header';
import { SharedPipesModule } from '../../../../../shared/pipes';
import { HistoricalDataFraudPaymentsHeaderComponent } from './components/template-header/historical-data-fraud-payments-header.component';
import { HistoricalDataFraudPaymentsItemComponent } from './components/template-item/historical-data-fraud-payments-item.component';
import { HistoricalDataFraudPaymentsListComponent } from './historical-data-fraud-payments-list.component';

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
        HistoricalDataFraudPaymentsListComponent,
        HistoricalDataFraudPaymentsHeaderComponent,
        HistoricalDataFraudPaymentsItemComponent,
    ],
    exports: [HistoricalDataFraudPaymentsListComponent],
})
export class HistoricalDataFraudPaymentsListModule {}
