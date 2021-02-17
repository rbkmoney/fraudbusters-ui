import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { P2pTemplatesModule, P2pWbListsModule, PaymentTemplatesModule, PaymentWbListsModule } from '../../api';
import { CreateTemplateModule } from '../../shared/components/create-template/create-template.module';
import { PaymentEmulationTemplateService } from '../../shared/services/emulation/payment-emulation-template-service';
import { P2pGroupsReferenceService } from '../../shared/services/groups-reference/p2p-groups-reference.service';
import { PaymentGroupsReferenceService } from '../../shared/services/groups-reference/payment-groups-reference.service';
import { P2pGroupsService } from '../../shared/services/groups/p2p-groups.service';
import { PaymentGroupsService } from '../../shared/services/groups/payment-groups.service';
import { OperationTypeManagementService } from '../../shared/services/operation-type-management.service';
import { P2pReferencesService } from '../../shared/services/reference/p2p-references.service';
import { PaymentReferencesService } from '../../shared/services/reference/payment-references.service';
import { ErrorHandlerService } from '../../shared/services/utils/error-handler.service';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { EditTemplateComponent } from './edit-template/edit-template.component';
import { TemplatesService } from './services/templates/templates.service';
import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';

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
        FlexModule,
        CreateTemplateModule,
        MatIconModule,
        CommonModule,
        PaymentWbListsModule,
        P2pWbListsModule,
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
        PaymentEmulationTemplateService,
        ErrorHandlerService,
    ],
})
export class TemplateModule {}
