import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { OperationType } from '../../../../shared/constants/operation-type';
import { LAYOUT_GAP_M } from '../../../../tokens';
import { CreateP2pReferenceService } from '../../services/create-p2p-reference.service';

@Component({
    templateUrl: 'create-p2p-reference.component.html',
    providers: [CreateP2pReferenceService],
})
export class CreateP2pReferenceComponent {
    forms = this.createPaymentReferenceService.forms;
    operationType = OperationType;
    inProgress$ = this.createPaymentReferenceService.inProgress$;

    constructor(
        private createPaymentReferenceService: CreateP2pReferenceService,
        private router: Router,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {
        this.createPaymentReferenceService.created$.subscribe((q) => {
            this.router.navigate(['/groups-reference/p2p']);
        });
    }

    addItem() {
        this.createPaymentReferenceService.addItem();
    }

    removeItem(i: number) {
        this.createPaymentReferenceService.removeItem(i);
    }

    createReference() {
        this.createPaymentReferenceService.create();
    }
}
