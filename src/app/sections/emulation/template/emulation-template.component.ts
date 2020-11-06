import { Component, OnInit } from '@angular/core';
import { OperationTypeComponent } from '../../../shared/components/operation-type-component';
import { OperationType } from '../../../shared/constants/operation-type';
import { ActivatedRoute } from '@angular/router';
import { Template } from '../../templates/model/template';
import { PaymentEmulateFilter } from './model/payment-emulate-filter';
import { P2pEmulateFilter } from './model/p2p-emulate-filter';
import { EmulationTemplateService } from './emulation-template.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandlerService } from '../../../shared/services/utils/error-handler.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-template',
    templateUrl: './emulation-template.component.html',
    styleUrls: ['./emulation-template.component.scss'],
})
export class EmulationTemplateComponent extends OperationTypeComponent implements OnInit {
    filter: PaymentEmulateFilter | P2pEmulateFilter;
    partyId: string;
    shopId: string;
    identityId: string;
    operationType: OperationType;
    operationTypes;
    templates: Template[] = [];

    constructor(
        private route: ActivatedRoute,
        private emulationTemplateService: EmulationTemplateService,
        private errorHandlerService: ErrorHandlerService,
        private snackBar: MatSnackBar
    ) {
        super();
    }

    ngOnInit(): void {
        this.operationTypes = Object.keys(OperationType);
        this.operationType = this.operationTypes[0];
        this.selectionChange();
    }

    selectionChange(): void {
        if (this.operationType === OperationType.Payment) {
            this.filter = new PaymentEmulateFilter('', '');
        } else {
            this.filter = new P2pEmulateFilter('');
        }
        this.templates = [];
    }

    emulate(): void {
        this.emulationTemplateService.emulate((OperationType as any)[this.operationType], this.filter).subscribe(
            (templates) => {
                this.templates = templates.filter((value) => value != null);
            },
            (error: HttpErrorResponse) => {
                this.errorHandlerService.handleError(error, this.snackBar);
            }
        );
    }
}
