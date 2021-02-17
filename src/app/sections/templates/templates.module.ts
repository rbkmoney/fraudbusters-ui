import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import { P2pTemplatesModule, P2pWbListsModule, PaymentTemplatesModule, PaymentWbListsModule } from '../../api';
import { ConfirmActionDialogModule } from '../../shared/components/confirm-action-dialog';
import { EmptySearchResultModule } from '../../shared/components/empty-search-result';
import { SharedPipesModule } from '../../shared/pipes';
import { PaymentEmulationTemplateService } from '../../shared/services/emulation/payment-emulation-template-service';
import { P2pGroupsReferenceService } from '../../shared/services/groups-reference/p2p-groups-reference.service';
import { PaymentGroupsReferenceService } from '../../shared/services/groups-reference/payment-groups-reference.service';
import { P2pGroupsService } from '../../shared/services/groups/p2p-groups.service';
import { PaymentGroupsService } from '../../shared/services/groups/payment-groups.service';
import { OperationTypeManagementService } from '../../shared/services/operation-type-management.service';
import { P2pReferencesService } from '../../shared/services/reference/p2p-references.service';
import { PaymentReferencesService } from '../../shared/services/reference/payment-references.service';
import { P2pTemplatesComponent } from './components/p2p-templates/p2p-templates.component';
import { PaymentTemplatesComponent } from './components/payment-templates/payment-templates.component';
import { TemplatesSearchComponent } from './components/templates-search/templates-search.component';
import { TemplatesTableComponent } from './components/templates-table/templates-table.component';
import { TemplatesRoutingModule } from './templates-routing.module';
import { TemplatesComponent } from './templates.component';

@NgModule({
    imports: [
        TemplatesRoutingModule,
        MatTabsModule,
        CommonModule,
        MatCardModule,
        MatTableModule,
        MatSortModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        ConfirmActionDialogModule,
        MatMenuModule,
        EmptySearchResultModule,
        SharedPipesModule,
        FlexModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        PaymentTemplatesModule,
        P2pTemplatesModule,
        PaymentWbListsModule,
        P2pWbListsModule,
    ],
    declarations: [
        TemplatesComponent,
        P2pTemplatesComponent,
        PaymentTemplatesComponent,
        TemplatesTableComponent,
        TemplatesSearchComponent,
    ],
    // TODO: need to refactor these services
    providers: [
        OperationTypeManagementService,
        PaymentGroupsService,
        P2pGroupsService,
        PaymentReferencesService,
        P2pReferencesService,
        PaymentGroupsReferenceService,
        P2pGroupsReferenceService,
        PaymentEmulationTemplateService,
    ],
})
export class TemplatesModule {}
