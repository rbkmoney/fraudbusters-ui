import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { P2pTemplatesModule } from '../../api/p2p-templates';
import { PaymentTemplatesModule } from '../../api/payment-templates';
import { PaymentEmulationTemplateService } from '../../shared/services/emulation/payment-emulation-template-service';
import { P2pGroupsReferenceService } from '../../shared/services/groups-reference/p2p-groups-reference.service';
import { PaymentGroupsReferenceService } from '../../shared/services/groups-reference/payment-groups-reference.service';
import { P2pGroupsService } from '../../shared/services/groups/p2p-groups.service';
import { PaymentGroupsService } from '../../shared/services/groups/payment-groups.service';
import { P2pListsService } from '../../shared/services/lists/p2p-lists.service';
import { PaymentListsService } from '../../shared/services/lists/payment-lists.service';
import { OperationTypeManagementService } from '../../shared/services/operation-type-management.service';
import { P2pReferencesService } from '../../shared/services/reference/p2p-references.service';
import { PaymentReferencesService } from '../../shared/services/reference/payment-references.service';
import { ErrorHandlerService } from '../../shared/services/utils/error-handler.service';
import { ValidateResponseHandler } from '../../shared/services/utils/validate-response-handler.service';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { EditTemplateComponent } from './edit-template/edit-template.component';
import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';
import { TemplatesService } from './templates.service';

@NgModule({
    declarations: [TemplateComponent, EditTemplateComponent, CreateTemplateComponent],
    imports: [
        MatSnackBarModule,
        TemplateRoutingModule,
        MatCardModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        PaymentTemplatesModule,
        P2pTemplatesModule,
    ],
    providers: [
        TemplatesService,
        OperationTypeManagementService,
        PaymentGroupsService,
        P2pGroupsService,
        PaymentReferencesService,
        P2pReferencesService,
        PaymentGroupsReferenceService,
        P2pGroupsReferenceService,
        PaymentListsService,
        P2pListsService,
        PaymentEmulationTemplateService,
        ErrorHandlerService,
        ValidateResponseHandler,
    ],
})
export class TemplateModule {}
