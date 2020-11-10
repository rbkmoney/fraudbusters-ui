import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ConfigService } from '../../../core/config.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchFieldService } from '../../services/utils/search-field.service';
import { WbListComponent } from './wb-list.component';
import { WbListService } from './wb-list.service';
import { RemoveRowListDialogComponent } from './remove-row-list/remove-row-list-dialog.component';
import { AddRowListComponent } from './add-row-list/add-row-list.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { P2pListsService } from '../../services/lists/p2p-lists.service';
import { PaymentListsService } from '../../services/lists/payment-lists.service';
import { ErrorHandlerService } from '../../services/utils/error-handler.service';
import { OperationTypeManagementService } from '../../services/operation-type-management.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

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
