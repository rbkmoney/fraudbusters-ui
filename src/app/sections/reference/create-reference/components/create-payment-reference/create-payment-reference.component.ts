import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { OperationType } from '../../../../../shared/constants/operation-type';
import { LAYOUT_GAP_M } from '../../../../../tokens';
import { CreatePaymentReferenceService } from '../../services/create-payment-reference.service';

@Component({
    templateUrl: 'create-payment-reference.component.html',
    styleUrls: ['create-payment-reference.component.scss'],
    providers: [CreatePaymentReferenceService],
})
export class CreatePaymentReferenceComponent {
    forms = this.createPaymentReferenceService.forms;
    operationType = OperationType;
    inProgress$ = this.createPaymentReferenceService.inProgress$;

    constructor(
        private createPaymentReferenceService: CreatePaymentReferenceService,
        private router: Router,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {
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
}
