import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { PaymentEmulationTemplateService } from '../../../services/emulation/payment-emulation-template-service';
import { P2pGroupsReferenceService } from '../../../services/groups-reference/p2p-groups-reference.service';
import { PaymentGroupsReferenceService } from '../../../services/groups-reference/payment-groups-reference.service';
import { P2pGroupsService } from '../../../services/groups/p2p-groups.service';
import { PaymentGroupsService } from '../../../services/groups/payment-groups.service';
import { P2pListsService } from '../../../services/lists/p2p-lists.service';
import { PaymentListsService } from '../../../services/lists/payment-lists.service';
import { OperationTypeManagementService } from '../../../services/operation-type-management.service';
import { P2pReferencesService } from '../../../services/reference/p2p-references.service';
import { PaymentReferencesService } from '../../../services/reference/payment-references.service';
import { P2pTemplatesService } from '../../../services/template/p2p-templates.service';
import { PaymentTemplatesService } from '../../../services/template/payment-templates.service';
import { TemplateIdComponent } from './template-id.component';

@NgModule({
    declarations: [TemplateIdComponent],
    imports: [MatFormFieldModule, MatInputModule, MatAutocompleteModule, ReactiveFormsModule, CommonModule],
    exports: [TemplateIdComponent],
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
        PaymentListsService,
        P2pListsService,
        PaymentEmulationTemplateService,
    ],
})
export class TemplateIdModule {}
