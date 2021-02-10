import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { P2pTemplatesService } from '../../../api/p2p-templates';
import { ConfigService } from '../../../config';
import { SortOrder } from '../../../shared/constants/sort-order';
import { booleanDelay } from '../../../shared/operators';
import { FetchResult, PartialFetcher } from '../../../shared/utils/partial-fetcher';
import { Template } from '../../template/model/template';

export interface FetchTemplatesParams {
    searchValue?: string;
    sortOrder?: SortOrder;
    pageSize?: number;
}

@Injectable()
export class FetchP2pTemplatesService extends PartialFetcher<Template, FetchTemplatesParams> {
    inProgress$ = this.doAction$.pipe(booleanDelay(), shareReplay(1));
    private SIZE = this.configService.pageSize;

    constructor(private p2pTemplatesService: P2pTemplatesService, private configService: ConfigService) {
        super();
    }

    protected fetch(params: FetchTemplatesParams, lastId?: string): Observable<FetchResult<Template>> {
        const { searchValue, sortOrder, pageSize } = params;
        return this.p2pTemplatesService.findTemplates({
            size: pageSize ? pageSize : this.SIZE,
            sortOrder: sortOrder || SortOrder.ASC,
            ...(searchValue ? { searchValue } : {}),
            ...(lastId ? { lastId } : {}),
        });
    }
}
