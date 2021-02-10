import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
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
import { TemplatesService } from '../template/templates.service';
import { CreateGroupComponent } from './create-group/create-group.component';
import { EditGroupComponent } from './edit-group/edit-group.component';
import { GroupRoutingModule } from './group-routing.module';
import { GroupComponent } from './group.component';
import { GroupsService } from './groups.service';

@NgModule({
    imports: [
        GroupRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        CommonModule,
        MatSortModule,
        FormsModule,
        MatAutocompleteModule,
        MatIconModule,
        MatSnackBarModule,
        PaymentTemplatesModule,
        P2pTemplatesModule,
    ],
    declarations: [GroupComponent, EditGroupComponent, CreateGroupComponent],
    providers: [
        GroupsService,
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
        TemplatesService,
        ErrorHandlerService,
    ],
})
export class GroupModule {}
