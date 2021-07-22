import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { LAYOUT_GAP_M } from '../../../../../tokens';
import { CreateDefaultPaymentReferenceService } from '../../services/create-default-payment-reference.service';

@Component({
    templateUrl: 'create-default-payment-reference.component.html',
    providers: [CreateDefaultPaymentReferenceService],
})
export class CreateDefaultPaymentReferenceComponent {
    form = this.createDefaultPaymentReferenceService.form;
    inProgress$ = this.createDefaultPaymentReferenceService.inProgress$;

    constructor(
        private createDefaultPaymentReferenceService: CreateDefaultPaymentReferenceService,
        private router: Router,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {
        this.createDefaultPaymentReferenceService.created$.subscribe((q) => {
            this.router.navigate(['/default-references/payments']);
        });
    }

    createReference() {
        this.createDefaultPaymentReferenceService.create();
    }
}
