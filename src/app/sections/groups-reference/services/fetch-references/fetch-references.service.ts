import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { ConfigService } from '../../../../config';
import { OperationType } from '../../../../shared/constants/operation-type';
import { SortOrder } from '../../../../shared/constants/sort-order';
import { booleanDebounceTime } from '../../../../shared/operators';
import { OperationTypeManagementService } from '../../../../shared/services/operation-type-management.service';
import { FetchResult, PartialFetcher } from '../../../../shared/utils/partial-fetcher';
import { P2pGroupReferenceModel } from '../../model/p2p-groups-reference';
import { PaymentGroupReferenceModel } from '../../model/payment-groups-reference';

export interface FetchReferencesParams {
    type: OperationType;
    isGlobal: boolean;
    searchValue?: string;
    sortOrder?: SortOrder;
    size?: number;
    sortBy?: string;
    sortFieldValue?: string;
}

@Injectable()
export class FetchReferencesService extends PartialFetcher<
    PaymentGroupReferenceModel | P2pGroupReferenceModel,
    FetchReferencesParams
> {
    inProgress$ = this.doAction$.pipe(booleanDebounceTime(0), shareReplay(1));
    private SIZE = this.configService.pageSize;

    constructor(
        private operationReferenceService: OperationTypeManagementService,
        private configService: ConfigService
    ) {
        super();
    }

    protected fetch(
        params: FetchReferencesParams,
        lastId?: string
    ): Observable<FetchResult<PaymentGroupReferenceModel | P2pGroupReferenceModel>> {
        const { type, searchValue, sortOrder, sortFieldValue, size, sortBy } = params;
        return this.operationReferenceService.findGroupsReferenceService(type).findGroups({
            searchValue: searchValue || '',
            size: size || this.SIZE,
            sortOrder: sortOrder || SortOrder.ASC,
            sortFieldValue: sortFieldValue || '',
            ...(lastId ? { lastId } : {}),
            ...(sortBy ? { sortBy } : {}),
        });
    }
}
