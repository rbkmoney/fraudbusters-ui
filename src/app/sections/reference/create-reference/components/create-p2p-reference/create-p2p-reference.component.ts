import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { OperationType } from '../../../../../shared/constants/operation-type';
import { CsvUtilsService } from '../../../../../shared/services/utils/csv-utils.service';
import { CreateP2pReferenceService } from '../../services/create-p2p-reference.service';

@Component({
    templateUrl: 'create-p2p-reference.component.html',
    providers: [CreateP2pReferenceService, CsvUtilsService],
    styleUrls: ['create-p2p-reference.component.scss'],
})
export class CreateP2pReferenceComponent {
    forms = this.createP2pReferenceService.forms;
    operationType = OperationType;
    inProgress$ = this.createP2pReferenceService.inProgress$;

    constructor(private createP2pReferenceService: CreateP2pReferenceService, private router: Router) {
        this.createP2pReferenceService.created$.subscribe((q) => {
            this.router.navigate(['/references/p2p']);
        });
    }

    addItem() {
        this.createP2pReferenceService.addItem();
    }

    removeItem(i: number) {
        this.createP2pReferenceService.removeItem(i);
    }

    createReference() {
        this.createP2pReferenceService.create();
    }

    prepareFilesList(files: Array<any>): void {
        this.createP2pReferenceService.prepareFilesList(files);
    }
}
