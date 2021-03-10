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

import { P2pTemplatesModule, P2pWbListsModule, PaymentTemplatesModule, PaymentWbListsModule } from '../../../api';
import { PaymentEmulationTemplateService } from '../../services/emulation/payment-emulation-template-service';
import { P2pGroupsReferenceService } from '../../services/groups-reference/p2p-groups-reference.service';
import { PaymentGroupsReferenceService } from '../../services/groups-reference/payment-groups-reference.service';
import { P2pGroupsService } from '../../services/groups/p2p-groups.service';
import { PaymentGroupsService } from '../../services/groups/payment-groups.service';
import { OperationTypeManagementService } from '../../services/operation-type-management.service';
import { P2pReferencesService } from '../../services/reference/p2p-references.service';
import { PaymentReferencesService } from '../../services/reference/payment-references.service';
import { ErrorHandlerService } from '../../services/utils/error-handler.service';
import { SearchFieldService } from '../../services/utils/search-field.service';
import { RemoveRowListDialogComponent } from './remove-row-list/remove-row-list-dialog.component';
import { WbListComponent } from './wb-list.component';
import { WbListService } from './wb-list.service';

@NgModule({
    declarations: [WbListComponent, RemoveRowListDialogComponent],
    exports: [WbListComponent, RemoveRowListDialogComponent],
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
        PaymentTemplatesModule,
        P2pTemplatesModule,
        PaymentWbListsModule,
        P2pWbListsModule,
    ],
    providers: [
        SearchFieldService,
        WbListService,
        P2pGroupsReferenceService,
        PaymentEmulationTemplateService,
        ErrorHandlerService,
        P2pReferencesService,
        PaymentGroupsReferenceService,
        P2pGroupsService,
        PaymentReferencesService,
        PaymentGroupsService,
        OperationTypeManagementService,
    ],
})
export class WbListModule {}
