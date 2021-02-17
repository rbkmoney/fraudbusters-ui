import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { WbListRecords } from '../../../../api/fb-management/swagger-codegen/model/wbListRecords';
import { PaymentWbListsService } from '../../../../api/payment-wb-lists';
import { ConfigService } from '../../../../config';
import { SearchListParams } from '../../../../shared/model/search-list-params';
import { booleanDelay } from '../../../../shared/operators';
import { FetchResult, PartialFetcher } from '../../../../shared/utils/partial-fetcher';

@Injectable()
export class FetchPaymentGreyListService extends PartialFetcher<WbListRecords, SearchListParams> {
    inProgress$ = this.doAction$.pipe(booleanDelay(), shareReplay(1));
    private SIZE = this.configService.pageSize;

    constructor(private paymentWbListsService: PaymentWbListsService, private configService: ConfigService) {
        super();
    }

    protected fetch(params: SearchListParams, lastId?: string): Observable<FetchResult<WbListRecords>> {
        const { searchValue, listNames, listType, name, size, sortBy } = params;
        return this.paymentWbListsService.findListRows({
            size: size ? size : this.SIZE,
            listNames,
            listType,
            ...(searchValue ? { searchValue } : {}),
            ...(name ? { name } : {}),
            ...(sortBy ? { sortBy } : {}),
        });
    }
}
