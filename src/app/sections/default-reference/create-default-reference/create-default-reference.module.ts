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

import { HeadlineModule } from '../../../shared/components/headline';
import { TemplateIdModule } from '../../../shared/components/inputs/template-id';
import { ErrorHandlerService } from '../../../shared/services/utils/error-handler.service';
import { DefaultReferencesService } from '../default-references.service';
import { CreateDefaultP2pReferenceComponent, CreateDefaultPaymentReferenceComponent } from './components';
import { CreateDefaultReferenceRoutingModule } from './create-default-reference-routing.module';
import { CreateDefaultReferenceComponent } from './create-default-reference.component';

@NgModule({
    declarations: [
        CreateDefaultReferenceComponent,
        CreateDefaultPaymentReferenceComponent,
        CreateDefaultP2pReferenceComponent,
    ],
    imports: [
        CreateDefaultReferenceRoutingModule,
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
    exports: [CreateDefaultReferenceComponent],
    providers: [DefaultReferencesService, ErrorHandlerService],
})
export class CreateDefaultReferenceModule {}
