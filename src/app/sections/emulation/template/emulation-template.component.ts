import { Component, OnInit } from '@angular/core';
import { OperationTypeComponent } from '../../../shared/components/operation-type-component';
import { OperationType } from '../../../shared/constants/operation-type';
import { ActivatedRoute } from '@angular/router';
import { PaymentEmulateFilter } from './model/payment-emulate-filter';
import { P2pEmulateFilter } from './model/p2p-emulate-filter';
import { EmulationTemplateService } from './emulation-template.service';

@Component({
    selector: 'app-template',
    templateUrl: './emulation-template.component.html',
    styleUrls: ['./emulation-template.component.scss'],
})
export class EmulationTemplateComponent extends OperationTypeComponent implements OnInit {
    templates$ = this.emulationTemplateService.templates$;

    filter: PaymentEmulateFilter | P2pEmulateFilter;
    operationType: OperationType;
    operationTypes = [OperationType.Payment];

    constructor(private route: ActivatedRoute, private emulationTemplateService: EmulationTemplateService) {
        super();
        this.operationType = this.operationTypes[0];
        this.selectionChange();
        this.changeSelect();
    }

    ngOnInit(): void {}

    selectionChange(): void {
        if (this.operationType === OperationType.Payment) {
            this.filter = { partyId: '', shopId: '' };
        } else {
            this.filter = { identityId: '' };
        }
    }

    emulate(): void {
        this.emulationTemplateService.emulateNext(this.filter);
    }

    changeSelect(): void {
        this.emulationTemplateService.operationTypeNext(this.operationType);
    }
}
