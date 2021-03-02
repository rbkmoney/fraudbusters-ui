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

import { P2pReferencesTableComponent } from './p2p-references-table/p2p-references-table.component';
import { PaymentReferencesTableComponent } from './payment-references-table/payment-references-table.component';
import { ReferencesSearchComponent } from './references-search/references-search.component';

@NgModule({
    declarations: [PaymentReferencesTableComponent, P2pReferencesTableComponent, ReferencesSearchComponent],
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
    exports: [PaymentReferencesTableComponent, P2pReferencesTableComponent, ReferencesSearchComponent],
})
export class TemplateReferencesModule {}
