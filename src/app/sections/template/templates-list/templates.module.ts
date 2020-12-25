import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { RemoveTemplateDialogComponent } from './remove-template-dialog/remove-template-dialog.component';
import { TemplatesComponent } from './templates.component';

@NgModule({
    declarations: [TemplatesComponent, RemoveTemplateDialogComponent],
    imports: [
        MatToolbarModule,
        MatFormFieldModule,
        MatSelectModule,
        CommonModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatTableModule,
        MatSortModule,
        MatIconModule,
        FormsModule,
        MatDialogModule,
    ],
})
export class TemplatesModule {}
