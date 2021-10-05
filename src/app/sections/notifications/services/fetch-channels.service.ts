import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { Channel } from '../../../api/fb-management/swagger-codegen/model/channel';
import { NotificationsService } from '../../../api/payments/notifications';
import { ConfigService } from '../../../config';
import { SortOrder } from '../../../shared/constants/sort-order';
import { booleanDebounceTime } from '../../../shared/operators';
import { FetchResult, PartialFetcher } from '../../../shared/utils/partial-fetcher';

export interface FetchChannelsParams {
    searchValue?: string;
    lastId?: string;
    size?: number;
}

@Injectable()
export class FetchChannelsService extends PartialFetcher<Channel, FetchChannelsParams> {
    inProgress$ = this.doAction$.pipe(booleanDebounceTime(), shareReplay(1));
    private SIZE = this.configService.pageSize;

    constructor(private notificationsService: NotificationsService, private configService: ConfigService) {
        super();
    }

    protected fetch(params: FetchChannelsParams, id?: string): Observable<FetchResult<Channel>> {
        const { searchValue, size, lastId } = params;
        return this.notificationsService.getChannels({
            searchValue: searchValue || '',
            size: size ? size : this.SIZE,
            ...(lastId ? { lastId } : {}),
        });
    }
}
