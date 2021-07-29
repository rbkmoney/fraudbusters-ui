import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { Payment } from '../../../api/fb-management/swagger-codegen/model/payment';
import { PaymentHistoricalDataService } from '../../../api/payments/historical-data';
import { ConfigService } from '../../../config';
import { SortOrder } from '../../../shared/constants/sort-order';
import { booleanDelay } from '../../../shared/operators';
import { SearchFieldService } from '../../../shared/services/utils/search-field.service';
import { FetchResultContinuation } from '../../../shared/utils/partial-fetcher/fetch-result-continuation';
import { PartialFetcherContinuation } from '../../../shared/utils/partial-fetcher/partial-fetcher-continuation';
import { DatePipe } from '@angular/common';

export interface FetchPaymentParams {
    sortOrder?: SortOrder;
    size?: number;
    sortBy?: string;
    sortFieldValue?: string;
    from?: Date;
    to?: Date;
    paymentId?: string;
    cardToken?: string;
    shopId?: string;
    partyId?: string;
    status?: string;
    fingerprint?: string;
    email?: string;
}

@Injectable()
export class FetchHistoricalPaymentsService extends PartialFetcherContinuation<Payment, FetchPaymentParams> {
    inProgress$ = this.doAction$.pipe(booleanDelay(), shareReplay(1));
    private SIZE = this.configService.pageSize;

    constructor(
        private paymentHistoricalDataService: PaymentHistoricalDataService,
        private configService: ConfigService,
        public datepipe: DatePipe
    ) {
        super();
    }

    private readonly _yyyyMMDdHHMmSs = 'yyyy-MM-dd HH:mm:ss';

    protected fetch(params: FetchPaymentParams, lastId?: string): Observable<FetchResultContinuation<Payment>> {
        const {
            sortOrder,
            sortFieldValue,
            size,
            from,
            to,
            paymentId,
            cardToken,
            shopId,
            partyId,
            status,
            fingerprint,
            email,
        } = params;
        return this.paymentHistoricalDataService.filter({
            sortFieldValue: sortFieldValue || '',
            from: this.datepipe.transform(from, this._yyyyMMDdHHMmSs),
            to: this.datepipe.transform(to, this._yyyyMMDdHHMmSs),
            sortOrder: sortOrder || SortOrder.ASC,
            paymentId: paymentId || '',
            cardToken: cardToken || '',
            shopId: shopId || '',
            partyId: partyId || '',
            status: status || '',
            fingerprint: fingerprint || '',
            email: email || '',
            size: size ? size : this.SIZE,
            ...(lastId ? { lastId } : {}),
        });
    }
}
