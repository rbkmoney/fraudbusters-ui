import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';

import { ListHeaderModule } from '../../../../../shared/components/list-header';
import { SharedPipesModule } from '../../../../../shared/pipes';
import { ActionsComponent } from './components/actions/actions.component';
import { PaymentDataSetHeaderComponent } from './components/data-set-header/payment-data-set-header.component';
import { PaymentDataSetItemComponent } from './components/data-set-item/payment-data-set-item.component';
import { PaymentDataSetsListComponent } from './payment-data-sets-list.component';

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
        PaymentDataSetsListComponent,
        PaymentDataSetHeaderComponent,
        PaymentDataSetItemComponent,
        ActionsComponent,
    ],
    exports: [PaymentDataSetsListComponent],
})
export class PaymentDataSetsListModule {}
