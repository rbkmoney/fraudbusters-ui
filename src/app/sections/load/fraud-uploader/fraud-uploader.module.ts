import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../../../core/config.service';
import { FraudUploaderService } from '../../../shared/services/fraud-uploader/fraud-uploader.service';
import { FraudUploaderComponent } from './fraud-uploader.component';
import { FraudUploaderRoutingModule } from './fraud-uploader-routing.module';
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
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProgressComponent } from './progress/progress.component';
import { DndDirective } from './dnd.directive';
import { ErrorHandlerService } from '../../../shared/services/utils/error-handler.service';
import { MatTooltipModule } from '@angular/material/tooltip';

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
