import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { ConfigService } from '../../../config';
import { OperationType } from '../../../shared/constants/operation-type';
import { SortOrder } from '../../../shared/constants/sort-order';
import { booleanDebounceTime } from '../../../shared/operators';
import { OperationTypeManagementService } from '../../../shared/services/operation-type-management.service';
import { FetchResult, PartialFetcher } from '../../../shared/utils/partial-fetcher';
import { Template } from '../../template/types/template';

export interface FetchTemplatesParams {
    type: OperationType;
    searchValue?: string;
    sortOrder?: SortOrder;
    pageSize?: number;
}

@Injectable()
export class FetchTemplatesService extends PartialFetcher<Template, FetchTemplatesParams> {
    inProgress$ = this.doAction$.pipe(booleanDebounceTime(0), shareReplay(1));
    private SIZE = this.configService.pageSize;

    constructor(
        private operationTypeManagementService: OperationTypeManagementService,
        private configService: ConfigService
    ) {
        super();
    }

    protected fetch(params: FetchTemplatesParams, lastId?: string): Observable<FetchResult<Template>> {
        const { type, searchValue, sortOrder, pageSize } = params;
        return this.operationTypeManagementService.findTemplateService(type).findTemplates({
            size: pageSize ? pageSize : this.SIZE,
            sortOrder: sortOrder || SortOrder.ASC,
            ...(searchValue ? { searchValue } : {}),
            ...(lastId ? { lastId } : {}),
        });
    }
}
