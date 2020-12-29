import {
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ConfigService } from '../../../core/config.service';
import { P2pListsService } from '../../services/lists/p2p-lists.service';
import { PaymentListsService } from '../../services/lists/payment-lists.service';
import { OperationTypeManagementService } from '../../services/operation-type-management.service';
import { ErrorHandlerService } from '../../services/utils/error-handler.service';
import { SearchFieldService } from '../../services/utils/search-field.service';
import { AddRowListComponent } from './add-row-list/add-row-list.component';
import { RemoveRowListDialogComponent } from './remove-row-list/remove-row-list-dialog.component';
import { WbListComponent } from './wb-list.component';
import { WbListService } from './wb-list.service';

@NgModule({
    declarations: [WbListComponent, RemoveRowListDialogComponent, AddRowListComponent],
    exports: [WbListComponent, AddRowListComponent, RemoveRowListDialogComponent],
    imports: [
        CommonModule,
        MatTableModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatToolbarModule,
        MatPaginatorModule,
        MatSortModule,
        MatSnackBarModule,
        MatDialogModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatAutocompleteModule,
        NgxMatTimepickerModule,
        NgxMatNativeDateModule,
        NgxMatDatetimePickerModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        FormsModule,
    ],
    providers: [
        ConfigService,
        SearchFieldService,
        WbListService,
        P2pListsService,
        PaymentListsService,
        ErrorHandlerService,
        OperationTypeManagementService,
    ],
})
export class WbListModule {}
