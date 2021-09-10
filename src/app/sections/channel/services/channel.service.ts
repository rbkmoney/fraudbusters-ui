import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Notification } from '../../../api/fb-management/swagger-codegen/model/notification';
import { NotificationsService } from '../../../api/payments/notifications';

@Injectable()
export class ChannelService {
    constructor(private notificationsService: NotificationsService) {}

    getChannelById(id: string): Observable<Notification> {
        return this.notificationsService.getChannel(id);
    }
}
