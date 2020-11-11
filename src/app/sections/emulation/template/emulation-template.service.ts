import { Injectable } from '@angular/core';
import { OperationTypeManagementService } from '../../../shared/services/operation-type-management.service';
import { OperationType } from '../../../shared/constants/operation-type';
import { Observable } from 'rxjs';
import { PaymentEmulateFilter } from './model/payment-emulate-filter';
import { P2pEmulateFilter } from './model/p2p-emulate-filter';
import { Template } from '../../templates/model/template';

@Injectable()
export class EmulationTemplateService {
    constructor(private operationReferenceService: OperationTypeManagementService) {}

    emulate(type: OperationType, filter: PaymentEmulateFilter | P2pEmulateFilter): Observable<Template[]> {
        return this.operationReferenceService.findEmulationService(type).emulate(filter);
    }
}
