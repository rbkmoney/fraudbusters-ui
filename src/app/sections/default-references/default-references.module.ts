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

import { PaymentDefaultReferencesService } from '../../api/payments/default-references';
import { PaymentEmulateService } from '../../api/payments/emulate';
import { PaymentGroupsReferencesService } from '../../api/payments/groups-references';
import { PaymentTemplatesModule } from '../../api/payments/templates';
import { ConfirmActionDialogModule } from '../../shared/components/confirm-action-dialog';
import { EmptySearchResultModule } from '../../shared/components/empty-search-result';
import { PaymentReferencesListModule } from '../../shared/components/payment-references-list';
import { ShowMorePanelModule } from '../../shared/components/show-more-panel';
import { TemplateReferencesModule } from '../../shared/components/template-references';
import { ReferencesRoutingModule } from '../references/references-routing.module';
import { DefaultPaymentReferencesComponent } from './components/payment-references/default-payment-references.component';
import { DefaultReferencesRoutingModule } from './default-references-routing.module';
import { DefaultReferencesComponent } from './default-references.component';
import { FetchDefaultReferencesService } from './services/fetch-default-references.service';

@NgModule({
    declarations: [DefaultReferencesComponent, DefaultPaymentReferencesComponent],
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
        MatSnackBarModule,
        MatFormFieldModule,
        MatInputModule,
        PaymentTemplatesModule,
        TemplateReferencesModule,
        PaymentReferencesListModule,
        MatDividerModule,
        ShowMorePanelModule,
    ],
    providers: [
        PaymentDefaultReferencesService,
        PaymentGroupsReferencesService,
        PaymentEmulateService,
        FetchDefaultReferencesService,
    ],
})
export class DefaultReferencesModule {}
