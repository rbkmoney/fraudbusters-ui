import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GroupsComponent } from './groups.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { ConfigService } from '../../core/config.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { GroupsRoutingModule } from './groups-routing.module';
import { CreateGroupComponent } from './create-group/create-group.component';
import { GroupsService } from './groups.service';
import { RemoveGroupDialogComponent } from './remove-group-dialog/remove-group-dialog.component';
import { EditGroupComponent } from './edit-group/edit-group.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchFieldService } from '../../shared/services/utils/search-field.service';

@NgModule({
    declarations: [GroupsComponent, CreateGroupComponent, RemoveGroupDialogComponent, EditGroupComponent],
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
    ],
    providers: [GroupsService, ConfigService, SearchFieldService],
})
export class GroupsModule {}
