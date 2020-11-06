import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesRoutingModule } from './templates-routing.module';
import { TemplatesComponent } from './templates.component';
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
import { TemplatesService } from './templates.service';
import { ConfigService } from '../../core/config.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { RemoveTemplateDialogComponent } from './remove-template-dialog/remove-template-dialog.component';
import { FormsModule } from '@angular/forms';
import { EditTemplateModule } from './edit-template/edit-template.module';
import { CreateTemplateModule } from './create-template/create-template.module';
import { SearchFieldService } from '../../shared/services/utils/search-field.service';

@NgModule({
    declarations: [TemplatesComponent, RemoveTemplateDialogComponent],
    imports: [
        CommonModule,
        TemplatesRoutingModule,
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
        EditTemplateModule,
        CreateTemplateModule,
        FormsModule,
    ],
    providers: [TemplatesService, ConfigService, SearchFieldService],
})
export class TemplatesModule {}
