import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { ConfigService } from '../../../core/config.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { WhiteListRoutingModule } from './white-list-routing.module';
import { WhiteListComponent } from './white-list.component';
import { AddRowWhiteListComponent } from './add-row-white-list/add-row-white-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RemoveRowWhiteListDialogComponent } from './remove-row-white-list/remove-row-white-list-dialog.component';
import { SearchFieldService } from '../../../shared/services/utils/search-field.service';

@NgModule({
    declarations: [WhiteListComponent, AddRowWhiteListComponent, RemoveRowWhiteListDialogComponent],
    imports: [
        CommonModule,
        WhiteListRoutingModule,
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
    providers: [ConfigService, SearchFieldService],
})
export class WhiteListModule {}
