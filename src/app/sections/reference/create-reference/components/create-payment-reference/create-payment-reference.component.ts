import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { OperationType } from '../../../../../shared/constants/operation-type';
import { CsvUtilsService } from '../../../../../shared/services/utils/csv-utils.service';
import { CreatePaymentReferenceService } from '../../services/create-payment-reference.service';

@Component({
    templateUrl: 'create-payment-reference.component.html',
    providers: [CreatePaymentReferenceService, CsvUtilsService],
    styleUrls: ['create-payment-reference.component.scss'],
})
export class CreatePaymentReferenceComponent {
    forms = this.createPaymentReferenceService.forms;
    operationType = OperationType;
    inProgress$ = this.createPaymentReferenceService.inProgress$;

    constructor(private createPaymentReferenceService: CreatePaymentReferenceService, private router: Router) {
        this.createPaymentReferenceService.created$.subscribe((q) => {
            this.router.navigate(['/references/payments']);
        });
    }

    addItem() {
        this.createPaymentReferenceService.addItem();
    }

    removeItem(index: number) {
        this.createPaymentReferenceService.removeItem(index);
    }

    createReference() {
        this.createPaymentReferenceService.create();
    }

    prepareFilesList(files: Array<any>): void {
        this.createPaymentReferenceService.prepareFilesList(files);
    }
}
