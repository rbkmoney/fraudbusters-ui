import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { DataSetService } from '../../api/payments/data-set';
import { TestingDataSetListModule } from '../../shared/components/testing-data-set-list';
import { DataSetTemplateModule } from '../../shared/components/testing-data-set-list/components/data-set-template/data-set-template.module';
import { ErrorHandlerService } from '../../shared/services/utils/error-handler.service';
import { CreateDataSetComponent } from './create/create-data-set.component';
import { DataSetRoutingModule } from './data-set-routing.module';
import { DataSetComponent } from './data-set.component';
import { EditDataSetComponent } from './edit/edit-data-set.component';
import { TestingDataSetComponent } from './testing/testing-data-set.component';

@NgModule({
    declarations: [DataSetComponent, CreateDataSetComponent, EditDataSetComponent, TestingDataSetComponent],
    imports: [
        MatSnackBarModule,
        MatCardModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        FlexModule,
        MatIconModule,
        CommonModule,
        DataSetRoutingModule,
        TestingDataSetListModule,
        FlexLayoutModule,
        MatCardModule,
        ReactiveFormsModule,
        MatProgressBarModule,
        DataSetTemplateModule,
    ],
    providers: [DataSetService, ErrorHandlerService],
})
export class DataSetModule {}
