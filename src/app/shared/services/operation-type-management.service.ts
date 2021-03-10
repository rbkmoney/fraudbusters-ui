import { Injectable } from '@angular/core';

import { P2pTemplatesService } from '../../api/p2p-templates';
import { P2pWbListsService } from '../../api/p2p-wb-lists';
import { PaymentTemplatesService } from '../../api/payment-templates';
import { PaymentWbListsService } from '../../api/payment-wb-lists';
import { OperationType } from '../constants/operation-type';
import { IEmulationTemplateService } from './emulation/iemulation-template.service';
import { PaymentEmulationTemplateService } from './emulation/payment-emulation-template-service';
import { IGroupsReferenceService } from './groups-reference/igroups-reference.service';
import { P2pGroupsReferenceService } from './groups-reference/p2p-groups-reference.service';
import { PaymentGroupsReferenceService } from './groups-reference/payment-groups-reference.service';
import { IGroupsService } from './groups/igroups.service';
import { P2pGroupsService } from './groups/p2p-groups.service';
import { PaymentGroupsService } from './groups/payment-groups.service';
import { IReferencesService } from './reference/ireferences.service';
import { P2pReferencesService } from './reference/p2p-references.service';
import { PaymentReferencesService } from './reference/payment-references.service';

@Injectable()
export class OperationTypeManagementService {
    constructor(
        private paymentTemplateService: PaymentTemplatesService,
        private p2pTemplatesService: P2pTemplatesService,
        private paymentGroupsService: PaymentGroupsService,
        private p2pGroupsService: P2pGroupsService,
        private paymentReferenceService: PaymentReferencesService,
        private p2pReferenceService: P2pReferencesService,
        private paymentGroupsReferenceService: PaymentGroupsReferenceService,
        private p2pGroupsReferenceService: P2pGroupsReferenceService,
        private paymentWbListsService: PaymentWbListsService,
        private p2pWbListsService: P2pWbListsService,
        private paymentEmulationTemplateServiceImpl: PaymentEmulationTemplateService
    ) {}

    /**
     * @deprecated
     */
    findTemplateService(type: OperationType) {
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

    /**
     * @deprecated
     */
    findListsService(type: OperationType) {
        switch (type) {
            case OperationType.Payment:
                return this.paymentWbListsService;
            case OperationType.PeerToPeer:
                return this.p2pWbListsService;
            default:
                throw new Error(`Unknown type of operations: ${type}`);
        }
    }

    findEmulationService(type: OperationType): IEmulationTemplateService {
        switch (type) {
            case OperationType.Payment:
                return this.paymentEmulationTemplateServiceImpl;
            case OperationType.PeerToPeer:
                throw new Error(`Unknown type of operations: ${type}`);
            default:
                throw new Error(`Unknown type of operations: ${type}`);
        }
    }
}
