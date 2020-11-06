import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EmulationTemplateComponent } from './emulation-template.component';
import { EmulationTemplateRoutingModule } from './emulation-template-routing.module';
import { ConfigService } from '../../../core/config.service';
import { EmulationTemplateService } from './emulation-template.service';
import { PaymentEmulationTemplateService } from '../../../shared/services/emulation/payment-emulation-template-service';
import { ErrorHandlerService } from '../../../shared/services/utils/error-handler.service';
import { OperationTypeManagementService } from '../../../shared/services/operation-type-management.service';

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
