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
        FormsModule,
    ],
    providers: [ReferencesService, ConfigService],
})
export class ReferencesModule {}
