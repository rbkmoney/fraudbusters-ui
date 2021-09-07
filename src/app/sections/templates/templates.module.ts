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

import { PaymentTemplatesModule } from '../../api';
import { PaymentDefaultReferencesService } from '../../api/payments/default-references';
import { PaymentEmulateService } from '../../api/payments/emulate';
import { PaymentGroupsReferencesService } from '../../api/payments/groups-references';
import { PaymentReferencesService } from '../../api/payments/references';
import { ConfirmActionDialogModule } from '../../shared/components/confirm-action-dialog';
import { EmptySearchResultModule } from '../../shared/components/empty-search-result';
import { PaymentReferencesListModule } from '../../shared/components/payment-references-list';
import { ShowMorePanelModule } from '../../shared/components/show-more-panel';
import { TemplateReferencesSearchComponent } from '../../shared/components/template-references/template-references-search/template-references-search.component';
import { SharedPipesModule } from '../../shared/pipes';
import { DefaultReferenceModule } from '../default-reference';
import { ReferenceModule } from '../reference';
import { DefaultPaymentReferencesComponent } from './components/payment-dafeult-references/default-payment-references.component';
import { PaymentReferencesComponent } from './components/payment-references/payment-references.component';
import { PaymentTemplatesListModule } from './components/payment-templates/payment-templates-list';
import { PaymentTemplatesComponent } from './components/payment-templates/payment-templates.component';
import { TemplatesSearchComponent } from './components/templates-search/templates-search.component';
import { FetchDefaultReferencesService } from './services/fetch-default-references.service';
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
        PaymentTemplatesListModule,
        ShowMorePanelModule,
        DefaultReferenceModule,
        ReferenceModule,
        PaymentReferencesListModule,
    ],
    declarations: [
        TemplatesComponent,
        PaymentTemplatesComponent,
        TemplatesSearchComponent,
        PaymentReferencesComponent,
        DefaultPaymentReferencesComponent,
        TemplateReferencesSearchComponent,
    ],
    providers: [
        PaymentReferencesService,
        PaymentDefaultReferencesService,
        PaymentGroupsReferencesService,
        PaymentEmulateService,
        FetchDefaultReferencesService,
    ],
})
export class TemplatesModule {}
