import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { P2pReferenceModel } from '../../api/fb-management/swagger-codegen/model/p2pReferenceModel';
import { PaymentReferenceModel } from '../../api/fb-management/swagger-codegen/model/paymentReferenceModel';
import { OperationType } from '../../shared/constants/operation-type';
import { OperationTypeManagementService } from '../../shared/services/operation-type-management.service';

@Injectable()
export class DefaultReferencesService {
    references$ = new Observable<PaymentReferenceModel[] | P2pReferenceModel[]>();

    constructor(private operationReferenceService: OperationTypeManagementService) {}

    saveReference(type: OperationType, reference: P2pReferenceModel | PaymentReferenceModel): Observable<string> {
        return this.operationReferenceService.findReferenceService(type).saveDefaultReference(reference);
    }
}
