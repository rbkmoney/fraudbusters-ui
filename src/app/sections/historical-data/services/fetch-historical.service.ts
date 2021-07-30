import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { ConfigService } from '../../../config';
import { SortOrder } from '../../../shared/constants/sort-order';
import { booleanDelay } from '../../../shared/operators';
import { FetchResultContinuation } from '../../../shared/utils/partial-fetcher/fetch-result-continuation';
import { PartialFetcherContinuation } from '../../../shared/utils/partial-fetcher/partial-fetcher-continuation';
import { SearchHistoricalParams } from '../search-historical-params';

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

export abstract class FetchHistoricalService<T, P> extends PartialFetcherContinuation<T, FetchPaymentParams> {
    inProgress$ = this.doAction$.pipe(booleanDelay(), shareReplay(1));
    protected SIZE = this.configService.pageSize;

    constructor(protected configService: ConfigService, protected datepipe: DatePipe) {
        super();
    }

    private readonly _yyyyMMDdHHMmSs = 'yyyy-MM-dd HH:mm:ss';

    protected abstract filter(params: SearchHistoricalParams): Observable<P>;

    protected fetch(params: FetchPaymentParams, continuationId?: string): Observable<FetchResultContinuation<T>> {
        const { sortOrder, size, from, to, paymentId, cardToken, shopId, partyId, status, fingerprint, email } = params;
        return this.filter({
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
            ...(continuationId ? { continuationId } : {}),
        });
    }
}
