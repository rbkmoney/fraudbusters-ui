import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ConfigService } from '../../core/config.service';
import { OperationTypeManagementService } from '../../shared/services/operation-type-management.service';
import { P2pReferencesService } from '../../shared/services/reference/p2p-references.service';
import { PaymentReferencesService } from '../../shared/services/reference/payment-references.service';
import { ErrorHandlerService } from '../../shared/services/utils/error-handler.service';
import { ParamsUtilService } from '../../shared/services/utils/params-util.service';
import { SearchFieldService } from '../../shared/services/utils/search-field.service';
import { CreateReferenceComponent } from './create-reference/create-reference.component';
import { ReferencesRoutingModule } from './references-routing.module';
import { ReferencesComponent } from './references.component';
import { ReferencesService } from './references.service';
import { RemoveReferenceDialogComponent } from './remove-reference-dialog/remove-reference-dialog.component';

@NgModule({
    declarations: [ReferencesComponent, RemoveReferenceDialogComponent, CreateReferenceComponent],
    imports: [
        CommonModule,
        ReferencesRoutingModule,
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
        MatGridListModule,
        FlexLayoutModule,
        MatButtonToggleModule,
        MatAutocompleteModule,
        MatTooltipModule,
        FormsModule,
        FormsModule,
    ],
    providers: [
        ReferencesService,
        ConfigService,
        SearchFieldService,
        P2pReferencesService,
        PaymentReferencesService,
        ErrorHandlerService,
        OperationTypeManagementService,
        ParamsUtilService,
    ],
})
export class ReferencesModule {}
