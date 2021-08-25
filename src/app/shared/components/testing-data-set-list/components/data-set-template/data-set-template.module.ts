import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { DataSetTemplateComponent } from './data-set-template.component';

@NgModule({
    declarations: [DataSetTemplateComponent],
    exports: [DataSetTemplateComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        FlexLayoutModule,
        MatCardModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressBarModule,
    ],
})
export class DataSetTemplateModule {}
