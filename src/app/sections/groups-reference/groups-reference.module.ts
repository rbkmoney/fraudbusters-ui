import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { P2pReferencesService } from 'src/app/shared/services/reference/p2p-references.service';

import { EmptySearchResultModule } from '../../shared/components/empty-search-result';
import { P2pTemplatesModule, PaymentTemplatesModule, P2pWbListsModule, PaymentWbListsModule } from '../../api';
import { PaymentEmulationTemplateService } from '../../shared/services/emulation/payment-emulation-template-service';
import { P2pGroupsReferenceService } from '../../shared/services/groups-reference/p2p-groups-reference.service';
import { PaymentGroupsReferenceService } from '../../shared/services/groups-reference/payment-groups-reference.service';
import { P2pGroupsService } from '../../shared/services/groups/p2p-groups.service';
import { PaymentGroupsService } from '../../shared/services/groups/payment-groups.service';
import { OperationTypeManagementService } from '../../shared/services/operation-type-management.service';
import { PaymentReferencesService } from '../../shared/services/reference/payment-references.service';
import { ErrorHandlerService } from '../../shared/services/utils/error-handler.service';
import { SearchFieldService } from '../../shared/services/utils/search-field.service';
import { P2pReferencesComponent } from './components/p2p-references/p2p-references.component';
import { PaymentReferencesComponent } from './components/payment-references/payment-references.component';
import { ReferencesSearchComponent } from './components/references-search/references-search.component';
import { ReferencesTableComponent } from './components/references-table/references-table.component';
import { GroupsReferenceRoutingModule } from './groups-reference-routing.module';
import { GroupsReferenceComponent } from './groups-reference.component';
import { GroupsReferenceService } from './services/groups-reference/groups-reference.service';

@NgModule({
    declarations: [
        GroupsReferenceComponent,
        PaymentReferencesComponent,
        P2pReferencesComponent,
        ReferencesTableComponent,
        ReferencesSearchComponent,
    ],
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
        PaymentTemplatesModule,
        P2pTemplatesModule,
        ReactiveFormsModule,
        MatProgressBarModule,
        MatTabsModule,
        MatMenuModule,
        EmptySearchResultModule,
        MatProgressSpinnerModule,
        PaymentWbListsModule,
        P2pWbListsModule,
    ],
    providers: [
        SearchFieldService,
        GroupsReferenceService,
        P2pGroupsReferenceService,
        PaymentGroupsReferenceService,
        ErrorHandlerService,
        OperationTypeManagementService,
        PaymentReferencesService,
        PaymentEmulationTemplateService,
        P2pReferencesService,
        P2pGroupsService,
        PaymentGroupsService,
    ],
})
export class GroupsReferenceModule {}
