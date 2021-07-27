import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { Payment } from '../../../api/fb-management/swagger-codegen/model/payment';
import { PaymentHistoricalDataService } from '../../../api/payments/historical-data';
import { ConfigService } from '../../../config';
import { SortOrder } from '../../../shared/constants/sort-order';
import { booleanDelay } from '../../../shared/operators';
import { SearchFieldService } from '../../../shared/services/utils/search-field.service';
import { PartialFetcher } from '../../../shared/utils/partial-fetcher';
import { FetchResultContinuation } from '../../../shared/utils/partial-fetcher/fetch-result-continuation';

export interface FetchPaymentParams {
    searchValue?: string;
    sortOrder?: SortOrder;
    size?: number;
    id?: string;
    name?: string;
    sortBy?: string;
    sortFieldValue?: string;
    from?: string;
    to?: string;
}

@Injectable()
export class FetchHistoricalPaymentsService extends PartialFetcher<Payment, FetchPaymentParams> {
    inProgress$ = this.doAction$.pipe(booleanDelay(), shareReplay(1));
    private SIZE = this.configService.pageSize;

    constructor(
        private paymentHistoricalDataService: PaymentHistoricalDataService,
        private configService: ConfigService,
        private searchFieldService: SearchFieldService
    ) {
        super();
    }

    protected fetch(params: FetchPaymentParams, lastId?: string): Observable<FetchResultContinuation<Payment>> {
        const { searchValue, sortOrder, sortFieldValue, size, from, to } = params;
        return this.paymentHistoricalDataService.filter({
            searchValue: searchValue || '',
            sortFieldValue: sortFieldValue || '',
            from: from || this.searchFieldService.todayFromTime().toISOString(),
            to: to || new Date().toISOString(),
            sortOrder: sortOrder || SortOrder.ASC,
            size: size ? size : this.SIZE,
        });
    }
}
