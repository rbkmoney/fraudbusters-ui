import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../../../config';
import { SearchHistoricalParams } from '../../../sections/historical-data/search-historical-params';
import { filterParameters } from '../../../shared/utils/filter-params';
import { PaymentResponse } from '../../fb-management/swagger-codegen/model/paymentResponse';

@Injectable()
export class PaymentHistoricalDataService {
    private readonly fbPaymentReferenceEndpoint = `${this.configService.fbManagementEndpoint}/payments-historical-data/payments-info`;

    constructor(private http: HttpClient, private configService: ConfigService) {}

    filter(params: SearchHistoricalParams): Observable<PaymentResponse> {
        return this.http.get<PaymentResponse>(`${this.fbPaymentReferenceEndpoint}`, {
            params: filterParameters(params),
        });
    }
}
