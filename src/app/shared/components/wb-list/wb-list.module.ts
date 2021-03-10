import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';

import { DetailsItemModule } from '../details-item';
import { ActionsComponent } from './components/actions/actions.component';
import { WbListHeaderComponent } from './components/wb-list-header/wb-list-header.component';
import { WbListRecordComponent } from './components/wb-list-record/wb-list-record.component';
import { WbListComponent } from './wb-list.component';

@NgModule({
    imports: [
        CommonModule,
        FlexModule,
        MatDividerModule,
        MatExpansionModule,
        MatButtonModule,
        MatCardModule,
        DetailsItemModule,
    ],
    declarations: [WbListComponent, WbListRecordComponent, WbListHeaderComponent, ActionsComponent],
    exports: [WbListComponent],
})
export class WbListModule {}
