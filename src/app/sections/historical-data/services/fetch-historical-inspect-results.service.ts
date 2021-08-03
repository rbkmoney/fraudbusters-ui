import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { InspectResult } from '../../../api/fb-management/swagger-codegen/model/inspectResult';
import { InspectResultsResponse } from '../../../api/fb-management/swagger-codegen/model/inspectResultsResponse';
import { HistoricalDataService } from '../../../api/payments/historical-data';
import { ConfigService } from '../../../config';
import { SearchHistoricalParams } from '../search-historical-params';
import { FetchHistoricalService } from './fetch-historical.service';

@Injectable()
export class FetchHistoricalInspectResultsService extends FetchHistoricalService<
    InspectResult,
    InspectResultsResponse
> {
    constructor(
        private historicalDataService: HistoricalDataService,
        protected configService: ConfigService,
        public datepipe: DatePipe
    ) {
        super(configService, datepipe);
    }

    protected filter(params: SearchHistoricalParams): Observable<InspectResultsResponse> {
        return this.historicalDataService.filterInspectResults(params);
    }
}
