import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoricalDataService } from '../../../api/payments/historical-data';
import { ConfigService } from '../../../config';
import { SearchHistoricalParams } from '../search-historical-params';
import { FetchHistoricalService } from './fetch-historical.service';
import { FraudPaymentsResponse } from '../../../api/fb-management/swagger-codegen/model/fraudPaymentsResponse';
import { FraudPayment } from '../../../api/fb-management/swagger-codegen/model/fraudPayment';

@Injectable()
export class FetchHistoricalFraudPaymentsService extends FetchHistoricalService<FraudPayment, FraudPaymentsResponse> {
    constructor(
        private historicalDataService: HistoricalDataService,
        protected configService: ConfigService,
        public datepipe: DatePipe
    ) {
        super(configService, datepipe);
    }

    protected filter(params: SearchHistoricalParams): Observable<FraudPaymentsResponse> {
        return this.historicalDataService.filterFraudPayments(params);
    }
}
