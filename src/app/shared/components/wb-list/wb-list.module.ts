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
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchFieldService } from '../../services/utils/search-field.service';
import { WbListComponent } from './wb-list.component';
import { WbListService } from './wb-list.service';
import { RemoveRowListDialogComponent } from './remove-row-list/remove-row-list-dialog.component';
import { AddRowListComponent } from './add-row-list/add-row-list.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [WbListComponent, RemoveRowListDialogComponent, AddRowListComponent],
    exports: [WbListComponent, AddRowListComponent, RemoveRowListDialogComponent],
    imports: [
        CommonModule,
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
        MatTooltipModule,
        FlexLayoutModule,
        FormsModule,
    ],
    providers: [ConfigService, SearchFieldService, WbListService],
})
export class WbListModule {}
