import { Injectable } from '@angular/core';
import { OperationType } from '../constants/operation-type';
import { PaymentTemplatesService } from './template/payment-templates.service';
import { ITemplatesService } from './template/itemplates.service';
import { P2pTemplatesService } from './template/p2p-templates.service';
import { PaymentGroupsService } from './groups/payment-groups.service';
import { P2pGroupsService } from './groups/p2p-groups.service';
import { IGroupsService } from './groups/igroups.service';
import { PaymentReferencesService } from './reference/payment-references.service';
import { P2pReferencesService } from './reference/p2p-references.service';
import { IReferencesService } from './reference/ireferences.service';
import { PaymentGroupsReferenceService } from './groups-reference/payment-groups-reference.service';
import { P2pGroupsReferenceService } from './groups-reference/p2p-groups-reference.service';
import { IGroupsReferenceService } from './groups-reference/igroups-reference.service';

@Injectable({
    providedIn: 'root',
})
export class OperationTypeManagementService {
    constructor(
        private paymentTemplateService: PaymentTemplatesService,
        private p2pTemplatesService: P2pTemplatesService,
        private paymentGroupsService: PaymentGroupsService,
        private p2pGroupsService: P2pGroupsService,
        private paymentReferenceService: PaymentReferencesService,
        private p2pReferenceService: P2pReferencesService,
        private paymentGroupsReferenceService: PaymentGroupsReferenceService,
        private p2pGroupsReferenceService: P2pGroupsReferenceService
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

    findGroupService(type: OperationType): IGroupsService {
        switch (type) {
            case OperationType.Payment:
                return this.paymentGroupsService;
            case OperationType.PeerToPeer:
                return this.p2pGroupsService;
            default:
                throw new Error(`Unknown type of operations: ${type}`);
        }
    }

    findGroupsReferenceService(type: OperationType): IGroupsReferenceService {
        switch (type) {
            case OperationType.Payment:
                return this.paymentGroupsReferenceService;
            case OperationType.PeerToPeer:
                return this.p2pGroupsReferenceService;
            default:
                throw new Error(`Unknown type of operations: ${type}`);
        }
    }
}
