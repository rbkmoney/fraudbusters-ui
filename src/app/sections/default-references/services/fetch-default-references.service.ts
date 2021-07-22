import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { ConfigService } from '../../../config';
import { OperationType } from '../../../shared/constants/operation-type';
import { SortOrder } from '../../../shared/constants/sort-order';
import { booleanDelay } from '../../../shared/operators';
import { FetchResult, PartialFetcher } from '../../../shared/utils/partial-fetcher';
import { PaymentDefaultReferencesService } from '../../../api/payments/default-references';
import { PaymentReference } from '../../../api/fb-management/swagger-codegen/model/paymentReference';

export interface FetchDefaultReferencesParams {
    type: OperationType;
    isGlobal: boolean;
    searchValue?: string;
    sortOrder?: SortOrder;
    size?: number;
    isDefault?: boolean;
    id?: string;
    name?: string;
    sortBy?: string;
    sortFieldValue?: string;
}

@Injectable()
export class FetchDefaultReferencesService extends PartialFetcher<PaymentReference, FetchDefaultReferencesParams> {
    inProgress$ = this.doAction$.pipe(booleanDelay(), shareReplay(1));
    private SIZE = this.configService.pageSize;

    constructor(
        private paymentDefaultReferencesService: PaymentDefaultReferencesService,
        private configService: ConfigService
    ) {
        super();
    }

    protected fetch(params: FetchDefaultReferencesParams, lastId?: string): Observable<FetchResult<PaymentReference>> {
        const { searchValue, sortOrder, sortFieldValue, sortBy, id, name, size, type } = params;
        return this.paymentDefaultReferencesService.filter({
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
