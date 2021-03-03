import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { DefaultP2pReferencesService } from '../../../../api/default-p2p-references';
import { DefaultP2pReferenceModel } from '../../../../api/fb-management/swagger-codegen/model/defaultP2pReferenceModel';
import { P2pReferenceModel } from '../../../../api/fb-management/swagger-codegen/model/p2pReferenceModel';
import { PaymentReferenceModel } from '../../../../api/fb-management/swagger-codegen/model/paymentReferenceModel';
import { ConfigService } from '../../../../config';
import { SortOrder } from '../../../../shared/constants/sort-order';
import { booleanDebounceTime } from '../../../../shared/operators';
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
export class FetchDefaultP2pReferencesService extends PartialFetcher<
    DefaultP2pReferenceModel,
    FetchDefaultReferencesParams
> {
    inProgress$ = this.doAction$.pipe(booleanDebounceTime(), shareReplay(1));
    private SIZE = this.configService.pageSize;

    constructor(
        private p2pDefaultReferencesService: DefaultP2pReferencesService,
        private configService: ConfigService
    ) {
        super();
    }

    protected fetch(
        params: FetchDefaultReferencesParams,
        lastId?: string
    ): Observable<FetchResult<PaymentReferenceModel | P2pReferenceModel>> {
        const { searchValue, sortOrder, sortFieldValue, sortBy, id, name, size } = params;
        return this.p2pDefaultReferencesService.findDefaultReferences({
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
