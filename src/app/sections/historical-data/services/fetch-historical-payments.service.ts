import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Payment } from '../../../api/fb-management/swagger-codegen/model/payment';
import { HistoricalDataService } from '../../../api/payments/historical-data';
import { ConfigService } from '../../../config';
import { FetchHistoricalService } from './fetch-historical.service';
import { PaymentsResponse } from '../../../api/fb-management/swagger-codegen/model/paymentsResponse';
import { SearchHistoricalParams } from '../search-historical-params';

@Injectable()
export class FetchHistoricalPaymentsService extends FetchHistoricalService<Payment, PaymentsResponse> {
    constructor(
        private paymentHistoricalDataService: HistoricalDataService,
        protected configService: ConfigService,
        public datepipe: DatePipe
    ) {
        super(configService, datepipe);
    }

    protected filter(params: SearchHistoricalParams): Observable<PaymentsResponse> {
        return this.paymentHistoricalDataService.filterPayments(params);
    }
}
