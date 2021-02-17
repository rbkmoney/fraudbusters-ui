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

import { P2pTemplatesModule, P2pWbListsModule, PaymentTemplatesModule, PaymentWbListsModule } from '../../../api';
import { SharedPipesModule } from '../../../shared/pipes';
import { PaymentEmulationTemplateService } from '../../../shared/services/emulation/payment-emulation-template-service';
import { P2pGroupsReferenceService } from '../../../shared/services/groups-reference/p2p-groups-reference.service';
import { PaymentGroupsReferenceService } from '../../../shared/services/groups-reference/payment-groups-reference.service';
import { P2pGroupsService } from '../../../shared/services/groups/p2p-groups.service';
import { PaymentGroupsService } from '../../../shared/services/groups/payment-groups.service';
import { OperationTypeManagementService } from '../../../shared/services/operation-type-management.service';
import { P2pReferencesService } from '../../../shared/services/reference/p2p-references.service';
import { PaymentReferencesService } from '../../../shared/services/reference/payment-references.service';
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
        SharedPipesModule,
        PaymentTemplatesModule,
        P2pTemplatesModule,
        PaymentWbListsModule,
        P2pWbListsModule,
    ],
    providers: [
        EmulationTemplateService,
        PaymentEmulationTemplateService,
        ErrorHandlerService,
        PaymentReferencesService,
        P2pGroupsService,
        P2pReferencesService,
        PaymentGroupsReferenceService,
        PaymentGroupsService,
        P2pGroupsReferenceService,
        OperationTypeManagementService,
    ],
})
export class EmulationTemplateModule {}
