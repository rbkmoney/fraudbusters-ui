import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import { PaymentReferencesService } from '../../api/payments/references';
import { EmptySearchResultModule } from '../../shared/components/empty-search-result';
import { PaymentReferencesListModule } from '../../shared/components/payment-references-list';
import { ShowMorePanelModule } from '../../shared/components/show-more-panel';
import { TemplateReferencesModule } from '../../shared/components/template-references';
import { HistoricalPaymentsDataComponent } from './components/payments/historical-payments-data.component';
import { HistoricalDataRoutingModule } from './historical-data-routing.module';
import { HistoricalDataComponent } from './historical-data.component';
import { FetchPaymentsService } from './services/fetch-payments.service';

@NgModule({
    declarations: [HistoricalDataComponent, HistoricalPaymentsDataComponent],
    imports: [
        FlexModule,
        MatButtonModule,
        MatCardModule,
        CommonModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        EmptySearchResultModule,
        MatSelectModule,
        ReactiveFormsModule,
        HistoricalDataRoutingModule,
        MatTabsModule,
        CommonModule,
        MatCardModule,
        MatTableModule,
        MatSortModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        EmptySearchResultModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatInputModule,
        MatDividerModule,
        ShowMorePanelModule,
        TemplateReferencesModule,
        PaymentReferencesListModule,
    ],
    providers: [FetchPaymentsService, PaymentReferencesService],
})
export class HistoricalDataModule {}
