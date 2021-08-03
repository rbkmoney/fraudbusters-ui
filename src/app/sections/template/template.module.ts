import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { PaymentTemplatesModule } from '../../api';
import { CreateTemplateModule } from '../../shared/components/create-template/create-template.module';
import { ErrorHandlerService } from '../../shared/services/utils/error-handler.service';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { EditTemplateComponent } from './edit-template/edit-template.component';
import { TemplatesService } from './services/templates/templates.service';
import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';

@NgModule({
    declarations: [TemplateComponent, EditTemplateComponent, CreateTemplateComponent],
    imports: [
        MatSnackBarModule,
        TemplateRoutingModule,
        MatCardModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        PaymentTemplatesModule,
        FlexModule,
        CreateTemplateModule,
        MatIconModule,
        CommonModule,
    ],
    providers: [TemplatesService, ErrorHandlerService],
})
export class TemplateModule {}
