import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';

import { ListHeaderModule } from '../../../../../shared/components/list-header';
import { SharedPipesModule } from '../../../../../shared/pipes';
import { HistoricalDataRefundsHeaderComponent } from './components/template-header/historical-data-refunds-header.component';
import { HistoricalDataRefundsItemComponent } from './components/template-item/historical-data-refunds-item.component';
import { HistoricalDataRefundsListComponent } from './historical-data-refunds-list.component';

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
        HistoricalDataRefundsListComponent,
        HistoricalDataRefundsHeaderComponent,
        HistoricalDataRefundsItemComponent,
    ],
    exports: [HistoricalDataRefundsListComponent],
})
export class HistoricalDataRefundsListModule {}
