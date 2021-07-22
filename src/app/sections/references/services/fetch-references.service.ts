import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { ConfigService } from '../../../config';
import { OperationType } from '../../../shared/constants/operation-type';
import { SortOrder } from '../../../shared/constants/sort-order';
import { booleanDelay } from '../../../shared/operators';
import { FetchResult, PartialFetcher } from '../../../shared/utils/partial-fetcher';
import { PaymentReference } from '../../../api/fb-management/swagger-codegen/model/paymentReference';
import { PaymentReferencesService } from '../../../api/payments/references';

export interface FetchReferencesParams {
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
export class FetchReferencesService extends PartialFetcher<PaymentReference, FetchReferencesParams> {
    inProgress$ = this.doAction$.pipe(booleanDelay(), shareReplay(1));
    private SIZE = this.configService.pageSize;

    constructor(private paymentReferencesService: PaymentReferencesService, private configService: ConfigService) {
        super();
    }

    protected fetch(params: FetchReferencesParams, lastId?: string): Observable<FetchResult<PaymentReference>> {
        const { type, searchValue, sortOrder, sortFieldValue, sortBy, id, isDefault, isGlobal, name, size } = params;
        return this.paymentReferencesService.findReferences({
            isDefault: isDefault || false,
            searchValue: searchValue || '',
            sortFieldValue: sortFieldValue || '',
            sortOrder: sortOrder || SortOrder.ASC,
            size: size ? size : this.SIZE,
            isGlobal,
            ...(lastId ? { lastId } : {}),
            ...(sortBy ? { sortBy } : {}),
            ...(id ? { id } : {}),
            ...(name ? { name } : {}),
        });
    }
}
