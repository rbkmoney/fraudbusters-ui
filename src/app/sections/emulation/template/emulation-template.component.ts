import { ChangeDetectionStrategy, Component } from '@angular/core';

import { OperationTypeComponent } from '../../../shared/components/operation-type-component';
import { OperationType } from '../../../shared/constants/operation-type';
import { EmulationTemplateService } from './emulation-template.service';
import { P2pEmulateFilter } from './model/p2p-emulate-filter';
import { PaymentEmulateFilter } from './model/payment-emulate-filter';

@Component({
    templateUrl: './emulation-template.component.html',
    styleUrls: ['./emulation-template.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmulationTemplateComponent extends OperationTypeComponent {
    templates$ = this.emulationTemplateService.templates$;

    filter: PaymentEmulateFilter | P2pEmulateFilter;
    operationTypes = [OperationType.Payment];

    constructor(private emulationTemplateService: EmulationTemplateService) {
        super();
        this.operationType = this.operationTypes[0];
        this.initFilter();
        this.selectOperationType();
    }

    initFilter(): void {
        if (this.operationType === OperationType.Payment) {
            this.filter = { partyId: '', shopId: '' };
        } else {
            this.filter = { identityId: '' };
        }
    }

    emulate(): void {
        this.emulationTemplateService.emulateNext(this.filter);
    }

    selectOperationType(): void {
        this.emulationTemplateService.operationTypeNext(this.operationType);
    }
}
