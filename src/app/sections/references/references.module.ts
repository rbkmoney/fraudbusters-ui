import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferencesRoutingModule } from './references-routing.module';
import { ReferencesComponent } from './references.component';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ReferencesService } from './references.service';
import { ConfigService } from '../../core/config.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { RemoveReferenceDialogComponent } from './remove-reference-dialog/remove-reference-dialog.component';
import { FormsModule } from '@angular/forms';
import { CreateReferenceComponent } from './create-reference/create-reference.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchFieldService } from '../../shared/services/utils/search-field.service';
import { P2pReferencesService } from '../../shared/services/reference/p2p-references.service';
import { PaymentReferencesService } from '../../shared/services/reference/payment-references.service';
import { ErrorHandlerService } from '../../shared/services/utils/error-handler.service';
import { OperationTypeManagementService } from '../../shared/services/operation-type-management.service';
import { ParamsUtilService } from '../../shared/services/utils/params-util.service';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

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
