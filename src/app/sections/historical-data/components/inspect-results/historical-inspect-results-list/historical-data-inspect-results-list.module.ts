import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';

import { ListHeaderModule } from '../../../../../shared/components/list-header';
import { SharedPipesModule } from '../../../../../shared/pipes';
import { HistoricalDataInspectResultsHeaderComponent } from './components/template-header/historical-data-inspect-results-header.component';
import { HistoricalDataInspectResultsItemComponent } from './components/template-item/historical-data-inspect-results-item.component';
import { HistoricalDataInspectResultsListComponent } from './historical-data-inspect-results-list.component';

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
        HistoricalDataInspectResultsListComponent,
        HistoricalDataInspectResultsHeaderComponent,
        HistoricalDataInspectResultsItemComponent,
    ],
    exports: [HistoricalDataInspectResultsListComponent],
})
export class HistoricalDataInspectResultsListModule {}
