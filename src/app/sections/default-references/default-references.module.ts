import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import { P2pTemplatesModule } from '../../api/p2p-templates';
import { PaymentTemplatesModule } from '../../api/payment-templates';
import { ConfirmActionDialogModule } from '../../shared/components/confirm-action-dialog';
import { EmptySearchResultModule } from '../../shared/components/empty-search-result';
import { PaymentReferencesListModule } from '../../shared/components/payment-references-list';
import { ShowMorePanelModule } from '../../shared/components/show-more-panel';
import { TemplateReferencesModule } from '../../shared/components/template-references';
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
import { ReferencesRoutingModule } from '../references/references-routing.module';
import { DefaultP2pReferencesComponent } from './components/p2p-references/default-p2p-references.component';
import { DefaultPaymentReferencesComponent } from './components/payment-references/default-payment-references.component';
import { DefaultReferencesRoutingModule } from './default-references-routing.module';
import { DefaultReferencesComponent } from './default-references.component';
import { FetchDefaultReferencesService } from './services/fetch-default-references.service';

@NgModule({
    declarations: [DefaultReferencesComponent, DefaultP2pReferencesComponent, DefaultPaymentReferencesComponent],
    imports: [
        DefaultReferencesRoutingModule,
        FlexModule,
        MatButtonModule,
        MatCardModule,
        CommonModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        EmptySearchResultModule,
        MatSelectModule,
        ReactiveFormsModule,
        ReferencesRoutingModule,
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
        FlexModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        PaymentTemplatesModule,
        P2pTemplatesModule,
        TemplateReferencesModule,
        PaymentReferencesListModule,
        MatDividerModule,
        ShowMorePanelModule,
    ],
    providers: [
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
        FetchDefaultReferencesService,
    ],
})
export class DefaultReferencesModule {}
