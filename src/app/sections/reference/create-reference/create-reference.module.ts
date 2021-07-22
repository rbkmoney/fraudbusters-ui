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

import { PaymentReferencesModule, PaymentReferencesService } from '../../../api/payments/references';
import { HeadlineModule } from '../../../shared/components/headline';
import { TemplateIdModule } from '../../../shared/components/inputs/template-id';
import { ErrorHandlerService } from '../../../shared/services/utils/error-handler.service';
import { ReferencesService } from '../references.service';
import { CreatePaymentReferenceComponent } from './components';
import { CreateReferenceRoutingModule } from './create-reference-routing.module';
import { CreateReferenceComponent } from './create-reference.component';

@NgModule({
    declarations: [CreateReferenceComponent, CreatePaymentReferenceComponent],
    imports: [
        CreateReferenceRoutingModule,
        PaymentReferencesModule,
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
        HeadlineModule,
    ],
    exports: [CreateReferenceComponent],
    providers: [ReferencesService, ErrorHandlerService, PaymentReferencesService],
})
export class CreateReferenceModule {}
