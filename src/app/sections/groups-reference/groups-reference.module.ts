import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
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
import { P2pReferencesService } from 'src/app/shared/services/reference/p2p-references.service';

import { PaymentEmulationTemplateService } from '../../shared/services/emulation/payment-emulation-template-service';
import { P2pGroupsReferenceService } from '../../shared/services/groups-reference/p2p-groups-reference.service';
import { PaymentGroupsReferenceService } from '../../shared/services/groups-reference/payment-groups-reference.service';
import { P2pGroupsService } from '../../shared/services/groups/p2p-groups.service';
import { PaymentGroupsService } from '../../shared/services/groups/payment-groups.service';
import { P2pListsService } from '../../shared/services/lists/p2p-lists.service';
import { PaymentListsService } from '../../shared/services/lists/payment-lists.service';
import { OperationTypeManagementService } from '../../shared/services/operation-type-management.service';
import { PaymentReferencesService } from '../../shared/services/reference/payment-references.service';
import { P2pTemplatesService } from '../../shared/services/template/p2p-templates.service';
import { PaymentTemplatesService } from '../../shared/services/template/payment-templates.service';
import { ErrorHandlerService } from '../../shared/services/utils/error-handler.service';
import { ParamsUtilService } from '../../shared/services/utils/params-util.service';
import { SearchFieldService } from '../../shared/services/utils/search-field.service';
import { GroupsReferenceRoutingModule } from './groups-reference-routing.module';
import { GroupsReferenceComponent } from './groups-reference.component';
import { GroupsReferenceService } from './groups-reference.service';
import { RemoveGroupReferenceDialogComponent } from './remove-group-reference-dialog/remove-group-reference-dialog.component';

@NgModule({
    declarations: [GroupsReferenceComponent, RemoveGroupReferenceDialogComponent],
    imports: [
        CommonModule,
        GroupsReferenceRoutingModule,
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
        FlexLayoutModule,
        FormsModule,
    ],
    providers: [
        SearchFieldService,
        GroupsReferenceService,
        P2pGroupsReferenceService,
        PaymentGroupsReferenceService,
        ErrorHandlerService,
        OperationTypeManagementService,
        PaymentTemplatesService,
        PaymentReferencesService,
        PaymentListsService,
        P2pListsService,
        PaymentEmulationTemplateService,
        P2pReferencesService,
        P2pGroupsService,
        ParamsUtilService,
        PaymentGroupsService,
        P2pTemplatesService,
    ],
})
export class GroupsReferenceModule {}
