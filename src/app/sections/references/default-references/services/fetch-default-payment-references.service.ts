import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { DefaultPaymentReferencesService } from '../../../../api/default-payment-references';
import { DefaultPaymentReferenceModel } from '../../../../api/fb-management/swagger-codegen/model/defaultPaymentReferenceModel';
import { P2pReferenceModel } from '../../../../api/fb-management/swagger-codegen/model/p2pReferenceModel';
import { PaymentReferenceModel } from '../../../../api/fb-management/swagger-codegen/model/paymentReferenceModel';
import { ConfigService } from '../../../../config';
import { SortOrder } from '../../../../shared/constants/sort-order';
import { booleanDelay } from '../../../../shared/operators';
import { FetchResult, PartialFetcher } from '../../../../shared/utils/partial-fetcher';

export interface FetchDefaultReferencesParams {
    searchValue?: string;
    sortOrder?: SortOrder;
    size?: number;
    id?: string;
    name?: string;
    sortBy?: string;
    sortFieldValue?: string;
}

@Injectable()
export class FetchDefaultPaymentReferencesService extends PartialFetcher<
    DefaultPaymentReferenceModel,
    FetchDefaultReferencesParams
> {
    inProgress$ = this.doAction$.pipe(booleanDelay(), shareReplay(1));
    private SIZE = this.configService.pageSize;

    constructor(
        private paymentDefaultReferencesService: DefaultPaymentReferencesService,
        private configService: ConfigService
    ) {
        super();
    }

    protected fetch(
        params: FetchDefaultReferencesParams,
        lastId?: string
    ): Observable<FetchResult<PaymentReferenceModel | P2pReferenceModel>> {
        const { searchValue, sortOrder, sortFieldValue, sortBy, id, name, size } = params;
        return this.paymentDefaultReferencesService.findDefaultReferences({
            searchValue: searchValue || '',
            sortFieldValue: sortFieldValue || '',
            sortOrder: sortOrder || SortOrder.ASC,
            size: size ? size : this.SIZE,
            ...(lastId ? { lastId } : {}),
            ...(sortBy ? { sortBy } : {}),
            ...(id ? { id } : {}),
            ...(name ? { name } : {}),
        });
    }
}
