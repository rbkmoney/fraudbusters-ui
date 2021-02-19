import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { WbListSearchComponent } from './wb-list-search.component';

@NgModule({
    declarations: [WbListSearchComponent],
    imports: [
        ReactiveFormsModule,
        FlexModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        MatAutocompleteModule,
        CommonModule,
    ],
    exports: [WbListSearchComponent],
})
export class WbListSearchModule {}
