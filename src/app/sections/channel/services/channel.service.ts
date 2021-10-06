import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationsService } from '../../../api/payments/notifications';
import { FetchResult } from '../../../shared/utils/partial-fetcher';
import { Channel } from '../../../api/fb-management/swagger-codegen/model/channel';

@Injectable()
export class ChannelService {
    constructor(private notificationsService: NotificationsService) {}

    getChannelById(id: string): Observable<FetchResult<Channel>> {
        return this.notificationsService.getChannels({
            searchValue: id,
            size: 1,
        });
    }
}
