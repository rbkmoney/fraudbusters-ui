import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { P2pReferenceModel } from '../../../api/fb-management/swagger-codegen/model/p2pReferenceModel';
import { PaymentReferenceModel } from '../../../api/fb-management/swagger-codegen/model/paymentReferenceModel';
import { ConfigService } from '../../../config';
import { OperationType } from '../../../shared/constants/operation-type';
import { SortOrder } from '../../../shared/constants/sort-order';
import { booleanDelay } from '../../../shared/operators';
import { FetchResult, PartialFetcher } from '../../../shared/utils/partial-fetcher';
import { OperationTypeManagementService } from '../../../shared/services/operation-type-management.service';

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
export class FetchDefaultReferencesService extends PartialFetcher<
    PaymentReferenceModel | P2pReferenceModel,
    FetchDefaultReferencesParams
> {
    inProgress$ = this.doAction$.pipe(booleanDelay(), shareReplay(1));
    private SIZE = this.configService.pageSize;

    constructor(
        private operationTypeManagementService: OperationTypeManagementService,
        private configService: ConfigService
    ) {
        super();
    }

    protected fetch(
        params: FetchDefaultReferencesParams,
        lastId?: string
    ): Observable<FetchResult<PaymentReferenceModel | P2pReferenceModel>> {
        const { searchValue, sortOrder, sortFieldValue, sortBy, id, name, size, type } = params;
        return this.operationTypeManagementService.findReferenceService(type).findDefaultReferences({
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
