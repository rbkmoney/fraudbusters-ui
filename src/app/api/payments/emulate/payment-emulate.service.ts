import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ConfigService } from '../../../config';
import { PaymentEmulateFilter } from '../../../sections/testing/components/emulation/template/model/payment-emulate-filter';
import { EmulateResponse } from '../../fb-management/swagger-codegen/model/emulateResponse';
import { Template } from '../../fb-management/swagger-codegen/model/template';

@Injectable()
export class PaymentEmulateService {
    private readonly fbPaymentReferenceEndpoint = `${this.configService.fbManagementEndpoint}/payments-emulations`;

    constructor(private http: HttpClient, private configService: ConfigService) {}

    emulate(filter: PaymentEmulateFilter): Observable<Template[]> {
        return this.http
            .get<EmulateResponse>(`${this.fbPaymentReferenceEndpoint}`, {
                params: { shopId: filter.shopId, partyId: filter.partyId },
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .pipe(map((response: EmulateResponse) => response.result));
    }
}
