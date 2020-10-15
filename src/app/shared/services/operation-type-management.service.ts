import { Injectable } from '@angular/core';
import { OperationType } from '../constants/operation-type';
import { PaymentTemplatesService } from './template/payment-templates.service';
import { ITemplatesService } from './template/itemplates.service';
import { P2pTemplatesService } from './template/p2p-templates.service';
import { PaymentReferencesService } from './reference/payment-references.service';
import { P2pReferencesService } from './reference/p2p-references.service';
import { IReferencesService } from './reference/ireferences.service';

@Injectable({
    providedIn: 'root',
})
export class OperationTypeManagementService {
    constructor(
        private paymentTemplateService: PaymentTemplatesService,
        private p2pTemplatesService: P2pTemplatesService,
        private paymentReferenceService: PaymentReferencesService,
        private p2pReferenceService: P2pReferencesService
    ) {}

    findTemplateService(type: OperationType): ITemplatesService {
        switch (type) {
            case OperationType.Payment:
                return this.paymentTemplateService;
            case OperationType.PeerToPeer:
                return this.p2pTemplatesService;
            default:
                throw new Error(`Unknown type of operations: ${type}`);
        }
    }

    findReferenceService(type: OperationType): IReferencesService {
        switch (type) {
            case OperationType.Payment:
                return this.paymentReferenceService;
            case OperationType.PeerToPeer:
                return this.p2pReferenceService;
            default:
                throw new Error(`Unknown type of operations: ${type}`);
        }
    }
}
