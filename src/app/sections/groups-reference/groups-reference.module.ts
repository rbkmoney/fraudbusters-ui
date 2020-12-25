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

import { ConfigService } from '../../core/config.service';
import { P2pGroupsReferenceService } from '../../shared/services/groups-reference/p2p-groups-reference.service';
import { PaymentGroupsReferenceService } from '../../shared/services/groups-reference/payment-groups-reference.service';
import { OperationTypeManagementService } from '../../shared/services/operation-type-management.service';
import { ErrorHandlerService } from '../../shared/services/utils/error-handler.service';
import { SearchFieldService } from '../../shared/services/utils/search-field.service';
import { CreateGroupsReferenceComponent } from './create-groups-reference/create-groups-reference.component';
import { GroupsReferenceRoutingModule } from './groups-reference-routing.module';
import { GroupsReferenceComponent } from './groups-reference.component';
import { GroupsReferenceService } from './groups-reference.service';
import { RemoveGroupReferenceDialogComponent } from './remove-group-reference-dialog/remove-group-reference-dialog.component';

@NgModule({
    declarations: [GroupsReferenceComponent, CreateGroupsReferenceComponent, RemoveGroupReferenceDialogComponent],
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
        ConfigService,
        SearchFieldService,
        GroupsReferenceService,
        P2pGroupsReferenceService,
        PaymentGroupsReferenceService,
        ErrorHandlerService,
        OperationTypeManagementService,
    ],
})
export class GroupsReferenceModule {}
