import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { DataSet } from '../../../../api/fb-management/swagger-codegen/model/dataSet';
import { DataSetService } from '../../../../api/payments/data-set';
import { ConfigService } from '../../../../config';
import { SortOrder } from '../../../../shared/constants/sort-order';
import { booleanDelay } from '../../../../shared/operators';
import { FetchResultContinuation } from '../../../../shared/utils/partial-fetcher/fetch-result-continuation';
import { PartialFetcherContinuation } from '../../../../shared/utils/partial-fetcher/partial-fetcher-continuation';

export interface FetchDataSetsParams {
    sortOrder?: SortOrder;
    size?: number;
    searchValue?: string;
    sortBy?: string;
    sortFieldValue?: string;
    from?: string;
    to?: string;
}

@Injectable()
export class FetchDataSetsService extends PartialFetcherContinuation<DataSet, FetchDataSetsParams> {
    inProgress$ = this.doAction$.pipe(booleanDelay(), shareReplay(1));
    private SIZE = this.configService.pageSize;

    constructor(
        private dataSetService: DataSetService,
        protected configService: ConfigService,
        public datepipe: DatePipe
    ) {
        super();
    }

    protected fetch(params: FetchDataSetsParams, lastId?: string): Observable<FetchResultContinuation<DataSet>> {
        const { sortOrder, sortBy, searchValue, size, from, to } = params;
        return this.dataSetService.filterDataSets({
            sortOrder: sortOrder || SortOrder.DESC,
            size: size ? size : this.SIZE,
            dataSetName: searchValue ? searchValue : null,
            ...(lastId ? { lastId } : {}),
            ...(sortBy ? { sortBy } : {}),
            ...(from ? { from } : {}),
            ...(to ? { to } : {}),
        });
    }
}
