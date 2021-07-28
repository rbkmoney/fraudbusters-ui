import {
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
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

import { PaymentHistoricalDataService } from '../../api/payments/historical-data';
import { EmptySearchResultModule } from '../../shared/components/empty-search-result';
import { ShowMorePanelModule } from '../../shared/components/show-more-panel';
import { SearchFieldService } from '../../shared/services/utils/search-field.service';
import { HistoricalDataPaymentListModule } from './components/payments/historical-payment-list';
import { HistoricalPaymentsDataComponent } from './components/payments/historical-payments-data.component';
import { HistoryDataSearchComponent } from './components/search/history-data-search.component';
import { HistoricalDataRoutingModule } from './historical-data-routing.module';
import { HistoricalDataComponent } from './historical-data.component';
import { FetchHistoricalPaymentsService } from './services/fetch-historical-payments.service';

@NgModule({
    declarations: [HistoricalDataComponent, HistoricalPaymentsDataComponent, HistoryDataSearchComponent],
    imports: [
        FlexModule,
        MatButtonModule,
        MatCardModule,
        CommonModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
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
        MatDatepickerModule,
        MatNativeDateModule,
        NgxMatTimepickerModule,
        NgxMatNativeDateModule,
        NgxMatDatetimePickerModule,
        HistoricalDataPaymentListModule,
    ],
    providers: [FetchHistoricalPaymentsService, PaymentHistoricalDataService, DatePipe, SearchFieldService],
})
export class HistoricalDataModule {}
