import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GroupsComponent } from './groups.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CoreModule } from '../core/core.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from '../app-routing.module';
import { TemplatesModule } from '../templates/templates.module';
import { CreateTemplateModule } from '../templates/create-template/create-template.module';
import { EditTemplateModule } from '../templates/edit-template/edit-template.module';
import { ReferencesModule } from '../references/references.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TemplatesService } from '../templates/templates.service';
import { ConfigService } from '../core/config.service';
import { CommonModule } from '@angular/common';
import { TemplatesRoutingModule } from '../templates/templates-routing.module';
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
        FormsModule,
    ],
    providers: [GroupsService, ConfigService],
})
export class GroupsModule {}
