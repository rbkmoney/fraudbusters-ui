import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoricalDataService } from '../../../api/payments/historical-data';
import { ConfigService } from '../../../config';
import { Refund } from '../../../api/fb-management/swagger-codegen/model/refund';
import { SearchHistoricalParams } from '../search-historical-params';
import { PaymentsResponse } from '../../../api/fb-management/swagger-codegen/model/paymentsResponse';
import { FetchHistoricalService } from './fetch-historical.service';
import { RefundsResponse } from '../../../api/fb-management/swagger-codegen/model/refundsResponse';

@Injectable()
export class FetchHistoricalRefundsService extends FetchHistoricalService<Refund, RefundsResponse> {
    constructor(
        private historicalDataService: HistoricalDataService,
        protected configService: ConfigService,
        public datepipe: DatePipe
    ) {
        super(configService, datepipe);
    }

    protected filter(params: SearchHistoricalParams): Observable<RefundsResponse> {
        return this.historicalDataService.filterRefunds(params);
    }
}
