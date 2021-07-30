import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../../../config';
import { SearchHistoricalParams } from '../../../sections/historical-data/search-historical-params';
import { filterParameters } from '../../../shared/utils/filter-params';
import { ChargebacksResponse } from '../../fb-management/swagger-codegen/model/chargebacksResponse';
import { FraudPaymentsResponse } from '../../fb-management/swagger-codegen/model/fraudPaymentsResponse';
import { InspectResultsResponse } from '../../fb-management/swagger-codegen/model/inspectResultsResponse';
import { PaymentsResponse } from '../../fb-management/swagger-codegen/model/paymentsResponse';
import { RefundsResponse } from '../../fb-management/swagger-codegen/model/refundsResponse';

@Injectable()
export class HistoricalDataService {
    private readonly fbPaymentReferenceEndpoint = `${this.configService.fbManagementEndpoint}/payments-historical-data`;

    constructor(private http: HttpClient, private configService: ConfigService) {}

    filterPayments(params: SearchHistoricalParams): Observable<PaymentsResponse> {
        return this.http.get<PaymentsResponse>(`${this.fbPaymentReferenceEndpoint}/payments-info`, {
            params: filterParameters(params),
        });
    }

    filterInspectResults(params: SearchHistoricalParams): Observable<InspectResultsResponse> {
        return this.http.get<InspectResultsResponse>(`${this.fbPaymentReferenceEndpoint}/inspect-results`, {
            params: filterParameters(params),
        });
    }

    filterChargebacks(params: SearchHistoricalParams): Observable<ChargebacksResponse> {
        return this.http.get<ChargebacksResponse>(`${this.fbPaymentReferenceEndpoint}/chargebacks`, {
            params: filterParameters(params),
        });
    }

    filterRefunds(params: SearchHistoricalParams): Observable<RefundsResponse> {
        return this.http.get<RefundsResponse>(`${this.fbPaymentReferenceEndpoint}/fraud-payments`, {
            params: filterParameters(params),
        });
    }

    filterFraudPayments(params: SearchHistoricalParams): Observable<FraudPaymentsResponse> {
        return this.http.get<FraudPaymentsResponse>(`${this.fbPaymentReferenceEndpoint}/refunds`, {
            params: filterParameters(params),
        });
    }
}
