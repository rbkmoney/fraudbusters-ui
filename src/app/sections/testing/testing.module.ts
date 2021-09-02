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
import { MatTooltipModule } from '@angular/material/tooltip';

import { DataSetService } from '../../api/payments/data-set';
import { EmptySearchResultModule } from '../../shared/components/empty-search-result';
import { ShowMorePanelModule } from '../../shared/components/show-more-panel';
import { ShowMoreContinuationPanelModule } from '../../shared/components/show-more-panel-continuation';
import { TestingDataSetListModule } from '../../shared/components/testing-data-set-list';
import { SearchFieldService } from '../../shared/services/utils/search-field.service';
import { EmulationModule } from './components/emulation';
import { PaymentDataSetsListModule } from './components/payment-data-sets/payment-data-sets-list';
import { PaymentDataSetsComponent } from './components/payment-data-sets/payment-data-sets.component';
import { DataSetsSearchComponent } from './components/search/data-sets-search.component';
import { FetchDataSetsService } from './services/payment-data-sets/fetch-data-sets.service';
import { RemoveDataSetsService } from './services/payment-data-sets/remove-data-sets.service';
import { TestingRoutingModule } from './testing-routing.module';
import { TestingComponent } from './testing.component';

@NgModule({
    declarations: [TestingComponent, PaymentDataSetsComponent, DataSetsSearchComponent],
    imports: [
        FlexModule,
        MatButtonModule,
        MatCardModule,
        CommonModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        ReactiveFormsModule,
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
        MatTooltipModule,
        NgxMatTimepickerModule,
        NgxMatNativeDateModule,
        NgxMatDatetimePickerModule,
        ShowMoreContinuationPanelModule,
        TestingRoutingModule,
        EmulationModule,
        TestingDataSetListModule,
        PaymentDataSetsListModule,
    ],
    providers: [DatePipe, SearchFieldService, DataSetService, FetchDataSetsService, RemoveDataSetsService],
})
export class TestingModule {}
