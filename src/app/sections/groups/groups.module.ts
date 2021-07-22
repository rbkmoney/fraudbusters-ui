import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { PaymentTemplatesModule } from '../../api';
import { ErrorHandlerService } from '../../shared/services/utils/error-handler.service';
import { SearchFieldService } from '../../shared/services/utils/search-field.service';
import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsComponent } from './groups.component';
import { RemoveGroupDialogComponent } from './remove-group-dialog/remove-group-dialog.component';
import { PaymentGroupsModule } from '../../api/payments/groups';

@NgModule({
    declarations: [GroupsComponent, RemoveGroupDialogComponent],
    imports: [
        CommonModule,
        GroupsRoutingModule,
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
        MatListModule,
        MatSnackBarModule,
        MatDialogModule,
        MatAutocompleteModule,
        FlexLayoutModule,
        FormsModule,
        PaymentTemplatesModule,
        ReactiveFormsModule,
        PaymentGroupsModule,
    ],
    providers: [SearchFieldService, ErrorHandlerService],
})
export class GroupsModule {}
