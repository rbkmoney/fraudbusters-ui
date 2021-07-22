import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { ConfigService } from '../../../../config';
import { OperationType } from '../../../../shared/constants/operation-type';
import { SortOrder } from '../../../../shared/constants/sort-order';
import { booleanDebounceTime } from '../../../../shared/operators';
import { PartialFetcher } from '../../../../shared/utils/partial-fetcher';
import { PaymentGroupsReferencesService } from '../../../../api/payments/groups-references';
import { GroupsReferencesResponse } from '../../../../api/fb-management/swagger-codegen/model/groupsReferencesResponse';
import { GroupReference } from '../../../../api/fb-management/swagger-codegen/model/groupReference';

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
export class FetchReferencesService extends PartialFetcher<GroupReference, FetchReferencesParams> {
    inProgress$ = this.doAction$.pipe(booleanDebounceTime(0), shareReplay(1));
    private SIZE = this.configService.pageSize;

    constructor(
        private paymentGroupsReferencesService: PaymentGroupsReferencesService,
        private configService: ConfigService
    ) {
        super();
    }

    protected fetch(params: FetchReferencesParams, lastId?: string): Observable<GroupsReferencesResponse> {
        const { type, searchValue, sortOrder, sortFieldValue, size, sortBy } = params;
        return this.paymentGroupsReferencesService.filter({
            searchValue: searchValue || '',
            size: size || this.SIZE,
            sortOrder: sortOrder || SortOrder.ASC,
            sortFieldValue: sortFieldValue || '',
            ...(lastId ? { lastId } : {}),
            ...(sortBy ? { sortBy } : {}),
        });
    }
}
