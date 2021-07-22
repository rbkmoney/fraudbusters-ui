import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OperationType } from '../../shared/constants/operation-type';
import { PaymentDefaultReferencesService } from '../../api/payments/default-references';
import { PaymentReference } from '../../api/fb-management/swagger-codegen/model/paymentReference';

@Injectable()
export class DefaultReferencesService {
    references$ = new Observable<PaymentReference[]>();

    constructor(private paymentDefaultReferencesService: PaymentDefaultReferencesService) {}

    saveReference(type: OperationType, reference: PaymentReference): Observable<string> {
        return this.paymentDefaultReferencesService.save(reference);
    }
}
