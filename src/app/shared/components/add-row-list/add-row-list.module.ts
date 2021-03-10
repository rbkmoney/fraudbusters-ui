import {
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

import { P2pTemplatesService } from '../../../api/p2p-templates';
import { PaymentTemplatesService } from '../../../api/payment-templates';
import { PaymentEmulationTemplateService } from '../../services/emulation/payment-emulation-template-service';
import { P2pGroupsReferenceService } from '../../services/groups-reference/p2p-groups-reference.service';
import { PaymentGroupsReferenceService } from '../../services/groups-reference/payment-groups-reference.service';
import { P2pGroupsService } from '../../services/groups/p2p-groups.service';
import { PaymentGroupsService } from '../../services/groups/payment-groups.service';
import { OperationTypeManagementService } from '../../services/operation-type-management.service';
import { P2pReferencesService } from '../../services/reference/p2p-references.service';
import { PaymentReferencesService } from '../../services/reference/payment-references.service';
import { ErrorHandlerService } from '../../services/utils/error-handler.service';
import { AddRowListComponent } from './add-row-list.component';

@NgModule({
    declarations: [AddRowListComponent],
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        FlexModule,
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatAutocompleteModule,
        NgxMatDatetimePickerModule,
        NgxMatTimepickerModule,
        NgxMatNativeDateModule,
        MatDatepickerModule,
        MatIconModule,
    ],
    exports: [AddRowListComponent],
    providers: [
        OperationTypeManagementService,
        PaymentTemplatesService,
        P2pTemplatesService,
        PaymentGroupsService,
        P2pGroupsService,
        PaymentReferencesService,
        P2pReferencesService,
        PaymentGroupsReferenceService,
        P2pGroupsReferenceService,
        PaymentEmulationTemplateService,
        ErrorHandlerService,
    ],
})
export class AddRowListModule {}
