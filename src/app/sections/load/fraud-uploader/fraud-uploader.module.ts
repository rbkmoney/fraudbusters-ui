import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ConfigService } from '../../../core/config.service';
import { FraudUploaderService } from '../../../shared/services/fraud-uploader/fraud-uploader.service';
import { ErrorHandlerService } from '../../../shared/services/utils/error-handler.service';
import { DndDirective } from './dnd.directive';
import { FraudUploaderRoutingModule } from './fraud-uploader-routing.module';
import { FraudUploaderComponent } from './fraud-uploader.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
    declarations: [FraudUploaderComponent, ProgressComponent, DndDirective],
    imports: [
        CommonModule,
        FraudUploaderRoutingModule,
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
        MatTooltipModule,
        MatGridListModule,
        FlexLayoutModule,
    ],
    providers: [FraudUploaderService, ConfigService, ErrorHandlerService],
})
export class FraudUploaderListModule {}
