import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesRoutingModule } from './templates-routing.module';
import { TemplatesComponent } from './templates.component';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TemplatesService } from './templates.service';
import { ConfigService } from '../../core/config.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { RemoveTemplateDialogComponent } from './remove-template-dialog/remove-template-dialog.component';
import { FormsModule } from '@angular/forms';
import { SearchFieldService } from '../../shared/services/utils/search-field.service';
import { P2pTemplatesService } from '../../shared/services/template/p2p-templates.service';
import { PaymentTemplatesService } from '../../shared/services/template/payment-templates.service';
import { ErrorHandlerService } from '../../shared/services/utils/error-handler.service';
import { ValidateResponseHandler } from '../../shared/services/utils/validate-response-handler.service';
import { EditTemplateComponent } from './edit-template/edit-template.component';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { OperationTypeManagementService } from '../../shared/services/operation-type-management.service';
import { ParamsUtilService } from '../../shared/services/utils/params-util.service';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [TemplatesComponent, RemoveTemplateDialogComponent, EditTemplateComponent, CreateTemplateComponent],
    imports: [
        CommonModule,
        TemplatesRoutingModule,
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
        FormsModule,
    ],
    providers: [
        TemplatesService,
        ConfigService,
        SearchFieldService,
        P2pTemplatesService,
        PaymentTemplatesService,
        ErrorHandlerService,
        ValidateResponseHandler,
        OperationTypeManagementService,
        ParamsUtilService,
    ],
})
export class TemplatesModule {}
