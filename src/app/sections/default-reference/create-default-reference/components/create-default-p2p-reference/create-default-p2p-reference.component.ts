import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { OperationType } from '../../../../../shared/constants/operation-type';
import { LAYOUT_GAP_M } from '../../../../../tokens';
import { CreateDefaultP2pReferenceService } from '../../services/create-default-p2p-reference.service';

@Component({
    templateUrl: 'create-default-p2p-reference.component.html',
    providers: [CreateDefaultP2pReferenceService],
})
export class CreateDefaultP2pReferenceComponent {
    form = this.createP2pReferenceService.form;
    operationType = OperationType;
    inProgress$ = this.createP2pReferenceService.inProgress$;

    constructor(
        private createP2pReferenceService: CreateDefaultP2pReferenceService,
        private router: Router,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {
        this.createP2pReferenceService.created$.subscribe((q) => {
            this.router.navigate(['/default-references/p2p']);
        });
    }

    createReference() {
        this.createP2pReferenceService.create();
    }
}
