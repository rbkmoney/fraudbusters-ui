import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ConfigService } from '../../../core/config.service';
import { PaymentEmulationTemplateService } from '../../../shared/services/emulation/payment-emulation-template-service';
import { OperationTypeManagementService } from '../../../shared/services/operation-type-management.service';
import { ErrorHandlerService } from '../../../shared/services/utils/error-handler.service';
import { EmulationTemplateRoutingModule } from './emulation-template-routing.module';
import { EmulationTemplateComponent } from './emulation-template.component';
import { EmulationTemplateService } from './emulation-template.service';

@NgModule({
    declarations: [EmulationTemplateComponent],
    imports: [
        CommonModule,
        EmulationTemplateRoutingModule,
        MatTableModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatToolbarModule,
        MatPaginatorModule,
        MatSortModule,
        MatSnackBarModule,
        MatDialogModule,
        FlexLayoutModule,
        FormsModule,
    ],
    providers: [
        ConfigService,
        EmulationTemplateService,
        PaymentEmulationTemplateService,
        ErrorHandlerService,
        OperationTypeManagementService,
    ],
})
export class EmulationTemplateModule {}
