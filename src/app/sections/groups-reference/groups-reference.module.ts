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

import { PaymentTemplatesModule } from '../../api';
import { PaymentGroupsReferencesModule, PaymentGroupsReferencesService } from '../../api/payments/groups-references';
import { EmptySearchResultModule } from '../../shared/components/empty-search-result';
import { ErrorHandlerService } from '../../shared/services/utils/error-handler.service';
import { SearchFieldService } from '../../shared/services/utils/search-field.service';
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
        ReferencesTableComponent,
        ReferencesSearchComponent,
    ],
    imports: [
        CommonModule,
        GroupsReferenceRoutingModule,
        PaymentGroupsReferencesModule,
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
        ReactiveFormsModule,
        MatProgressBarModule,
        MatTabsModule,
        MatMenuModule,
        EmptySearchResultModule,
        MatProgressSpinnerModule,
    ],
    providers: [SearchFieldService, GroupsReferenceService, PaymentGroupsReferencesService, ErrorHandlerService],
})
export class GroupsReferenceModule {}
