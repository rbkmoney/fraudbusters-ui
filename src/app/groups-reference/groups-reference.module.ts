import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ConfigService } from '../core/config.service';
import { GroupsReferenceComponent } from './groups-reference.component';
import { GroupsReferenceRoutingModule } from './groups-reference-routing.module';
import { CreateGroupsReferenceComponent } from './create-groups-reference/create-groups-reference.component';
import { RemoveGroupReferenceDialogComponent } from './remove-group-reference-dialog/remove-group-reference-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchFieldService } from '../shared/services/utils/search-field.service';

@NgModule({
    declarations: [GroupsReferenceComponent, CreateGroupsReferenceComponent, RemoveGroupReferenceDialogComponent],
    imports: [
        CommonModule,
        GroupsReferenceRoutingModule,
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
export class GroupsReferenceModule {}