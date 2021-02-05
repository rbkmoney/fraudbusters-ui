import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { TemplateIdModule } from '../../../shared/components/inputs/template-id';
import { ErrorHandlerService } from '../../../shared/services/utils/error-handler.service';
import { ReferencesService } from '../references.service';
import { CreateP2pReferenceComponent, CreatePaymentReferenceComponent } from './components';
import { CreateReferenceRoutingModule } from './create-reference-routing.module';
import { CreateReferenceComponent } from './create-reference.component';

@NgModule({
    declarations: [CreateReferenceComponent, CreatePaymentReferenceComponent, CreateP2pReferenceComponent],
    imports: [
        CreateReferenceRoutingModule,
        MatCardModule,
        FlexModule,
        CommonModule,
        ReactiveFormsModule,
        TemplateIdModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule,
        MatProgressBarModule,
    ],
    exports: [CreateReferenceComponent],
    providers: [ReferencesService, ErrorHandlerService],
})
export class CreateReferenceModule {}
