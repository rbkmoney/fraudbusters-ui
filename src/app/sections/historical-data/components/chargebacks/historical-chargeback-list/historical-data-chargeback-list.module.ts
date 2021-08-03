import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';

import { ListHeaderModule } from '../../../../../shared/components/list-header';
import { SharedPipesModule } from '../../../../../shared/pipes';
import { HistoricalDataChargebackHeaderComponent } from './components/template-header/historical-data-chargeback-header.component';
import { HistoricalDataChargebackItemComponent } from './components/template-item/historical-data-chargeback-item.component';
import { HistoricalDataChargebackListComponent } from './historical-data-chargeback-list.component';

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
        HistoricalDataChargebackListComponent,
        HistoricalDataChargebackHeaderComponent,
        HistoricalDataChargebackItemComponent,
    ],
    exports: [HistoricalDataChargebackListComponent],
})
export class HistoricalDataChargebackListModule {}
