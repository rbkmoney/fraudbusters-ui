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

import { PaymentGroupsReferencesService } from '../../api/payments/groups-references';
import { HeadlineModule } from '../../shared/components/headline';
import { TemplateIdModule } from '../../shared/components/inputs/template-id';
import { CreatePaymentReferenceComponent } from './components';
import { CreateGroupReferenceRoutingModule } from './create-group-reference-routing.module';
import { CreateGroupReferenceComponent } from './create-group-reference.component';

@NgModule({
    declarations: [CreateGroupReferenceComponent, CreatePaymentReferenceComponent],
    imports: [
        CreateGroupReferenceRoutingModule,
        CommonModule,
        HeadlineModule,
        MatCardModule,
        FlexModule,
        ReactiveFormsModule,
        TemplateIdModule,
        MatFormFieldModule,
        MatButtonModule,
        MatIconModule,
        MatProgressBarModule,
        MatInputModule,
        MatSnackBarModule,
    ],
    exports: [CreateGroupReferenceComponent],
    providers: [PaymentGroupsReferencesService],
})
export class CreateGroupReferenceModule {}
