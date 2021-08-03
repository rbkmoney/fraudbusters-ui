import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { PaymentTemplateReferencesTableComponent } from './payment-template-references-table/payment-template-references-table.component';
import { TemplateReferencesSearchComponent } from './template-references-search/template-references-search.component';

@NgModule({
    declarations: [PaymentTemplateReferencesTableComponent, TemplateReferencesSearchComponent],
    imports: [
        CommonModule,
        FlexModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatTableModule,
        MatSortModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
    ],
    exports: [PaymentTemplateReferencesTableComponent, TemplateReferencesSearchComponent],
})
export class TemplateReferencesModule {}
