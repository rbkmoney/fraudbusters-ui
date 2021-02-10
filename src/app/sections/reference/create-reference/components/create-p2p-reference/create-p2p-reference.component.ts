import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { OperationType } from '../../../../../shared/constants/operation-type';
import { CreateP2pReferenceService } from '../../services/create-p2p-reference.service';

@Component({
    templateUrl: 'create-p2p-reference.component.html',
    providers: [CreateP2pReferenceService],
    styleUrls: ['create-p2p-reference.component.scss'],
})
export class CreateP2pReferenceComponent {
    forms = this.createPaymentReferenceService.forms;
    operationType = OperationType;
    inProgress$ = this.createPaymentReferenceService.inProgress$;

    constructor(private createPaymentReferenceService: CreateP2pReferenceService, private router: Router) {
        this.createPaymentReferenceService.created$.subscribe((q) => {
            this.router.navigate(['/references/p2p']);
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
