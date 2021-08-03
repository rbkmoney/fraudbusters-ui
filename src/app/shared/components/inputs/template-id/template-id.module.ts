import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { PaymentTemplatesModule } from '../../../../api';
import { TemplateIdComponent } from './template-id.component';

@NgModule({
    declarations: [TemplateIdComponent],
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        CommonModule,
        PaymentTemplatesModule,
    ],
    exports: [TemplateIdComponent],
    providers: [],
})
export class TemplateIdModule {}
