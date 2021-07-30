import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Chargeback } from '../../../api/fb-management/swagger-codegen/model/chargeback';
import { ChargebacksResponse } from '../../../api/fb-management/swagger-codegen/model/chargebacksResponse';
import { HistoricalDataService } from '../../../api/payments/historical-data';
import { ConfigService } from '../../../config';
import { SearchHistoricalParams } from '../search-historical-params';
import { FetchHistoricalService } from './fetch-historical.service';

@Injectable()
export class FetchHistoricalChargebacksService extends FetchHistoricalService<Chargeback, ChargebacksResponse> {
    constructor(
        private historicalDataService: HistoricalDataService,
        protected configService: ConfigService,
        public datepipe: DatePipe
    ) {
        super(configService, datepipe);
    }

    protected filter(params: SearchHistoricalParams): Observable<ChargebacksResponse> {
        return this.historicalDataService.filterChargebacks(params);
    }
}
