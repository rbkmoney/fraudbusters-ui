import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ActionsComponent } from './components/actions/actions.component';
import { WbListHeaderComponent } from './components/wb-list-header/wb-list-header.component';
import { WbListRecordComponent } from './components/wb-list-record/wb-list-record.component';

import { WbTableComponent } from './wb-table.component';

@NgModule({
    imports: [
        MatTableModule,
        MatSortModule,
        CommonModule,
        MatIconModule,
        FlexModule,
        MatDividerModule,
        MatExpansionModule,
        MatButtonModule,
        MatCardModule,
    ],
    declarations: [WbTableComponent, WbListRecordComponent, WbListHeaderComponent, ActionsComponent],
    exports: [WbTableComponent],
})
export class WbTableModule {}
