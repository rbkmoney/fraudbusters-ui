import {
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
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

import { ErrorHandlerService } from '../../shared/services/utils/error-handler.service';
import { AuditRoutingModule } from './audit-routing.module';
import { AuditComponent } from './audit.component';
import { AuditService } from './audit.service';
import { AuditRemoteModule } from '../../api/audit';

@NgModule({
    declarations: [AuditComponent],
    imports: [
        CommonModule,
        AuditRoutingModule,
        AuditRemoteModule,
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
        MatDatepickerModule,
        MatNativeDateModule,
        NgxMatTimepickerModule,
        NgxMatNativeDateModule,
        NgxMatDatetimePickerModule,
        FormsModule,
    ],
    providers: [ErrorHandlerService, AuditService, DatePipe],
})
export class AuditModule {}
