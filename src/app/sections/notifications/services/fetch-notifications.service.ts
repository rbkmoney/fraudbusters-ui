import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { Notification } from '../../../api/fb-management/swagger-codegen/model/notification';
import { NotificationsService } from '../../../api/payments/notifications';
import { ConfigService } from '../../../config';
import { booleanDebounceTime } from '../../../shared/operators';
import { FetchResultContinuation } from '../../../shared/utils/partial-fetcher/fetch-result-continuation';
import { PartialFetcherContinuation } from '../../../shared/utils/partial-fetcher/partial-fetcher-continuation';

export interface FetchNotificationsParams {
    searchValue?: string;
    lastId?: string;
    size?: number;
}

@Injectable()
export class FetchNotificationsService extends PartialFetcherContinuation<Notification, FetchNotificationsParams> {
    inProgress$ = this.doAction$.pipe(booleanDebounceTime(), shareReplay(1));
    private SIZE = this.configService.pageSize;

    constructor(private notificationsService: NotificationsService, private configService: ConfigService) {
        super();
    }

    protected fetch(params: FetchNotificationsParams, id?: string): Observable<FetchResultContinuation<Notification>> {
        const { searchValue, size, lastId } = params;
        return this.notificationsService.getNotifications({
            searchValue: searchValue || '',
            size: size ? size : this.SIZE,
            ...(lastId ? { lastId } : {}),
        });
    }
}
