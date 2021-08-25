import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';

import { TestingDataSetListComponent } from './testing-data-set-list.component';
import { DataSetPaymentItemComponent } from './components/data-set-payment-item/data-set-payment-item.component';
import { DataSetPaymentHeaderComponent } from './components/data-set-payment-header/data-set-payment-header.component';
import { SharedPipesModule } from '../../pipes';
import { ListHeaderModule } from '../list-header';
import { TemplateService } from '../create-template/services/template/template.service';
import { PaymentTemplatesService } from '../../../api';

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
    declarations: [TestingDataSetListComponent, DataSetPaymentItemComponent, DataSetPaymentHeaderComponent],
    exports: [TestingDataSetListComponent],
    providers: [TemplateService, PaymentTemplatesService],
})
export class TestingDataSetListModule {}
