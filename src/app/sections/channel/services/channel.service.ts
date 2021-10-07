import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Channel } from '../../../api/fb-management/swagger-codegen/model/channel';
import { NotificationsService } from '../../../api/payments/notifications';

@Injectable()
export class ChannelService {
    constructor(private notificationsService: NotificationsService) {}

    getChannelById(name: string): Observable<Channel> {
        return this.notificationsService.getChannel(name);
    }
}
