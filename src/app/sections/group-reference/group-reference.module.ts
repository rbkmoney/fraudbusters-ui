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

import { P2pTemplatesModule, PaymentTemplatesModule } from '../../api';
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
import { CreateGroupReferenceComponent } from './create-group-reference/create-group-reference.component';
import { GroupReferenceRoutingModule } from './group-reference-routing.module';
import { GroupReferenceComponent } from './group-reference.component';
import { GroupsReferenceService } from './groups-reference.service';

@NgModule({
    imports: [
        GroupReferenceRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        FlexModule,
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
        MatSnackBarModule,
        PaymentTemplatesModule,
        P2pTemplatesModule,
    ],
    declarations: [GroupReferenceComponent, CreateGroupReferenceComponent],
    providers: [
        GroupsReferenceService,
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
    ],
})
export class GroupReferenceModule {}
